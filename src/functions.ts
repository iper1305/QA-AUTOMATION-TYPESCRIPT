type ArrayElement = number | string;

function processArrays(...arrays: ArrayElement[][]): void {
    if (arrays.length === 0) {
        console.log('No arrays provided');
        return;
    }

    arrays.forEach((arr: ArrayElement[], index: number) => {
        if (!Array.isArray(arr)) {
            console.warn(`Warning: Argument ${index + 1} is not an array`);
            return;
        }

        const numbers: number[] = arr.filter((item): item is number =>
            typeof item === 'number'
        );

        const strings: string[] = arr.filter((item): item is string =>
            typeof item === 'string'
        );

        if (numbers.length > 0) {
            const sum: number = numbers.reduce((sum, current) => sum + current, 0);
            console.log(`Array ${index + 1} (numbers part) - Sum:`, sum);
        }

        if (strings.length > 0) {
            const concatenated: string = strings.join('');
            console.log(`Array ${index + 1} (strings part) - Concatenated:`, concatenated);
        }
    });
}

const numberArray: number[] = [1, 2, 3, 4, 5];
const stringArray: string[] = ['Hello', ' ', 'World', '!'];
const mixedArray: ArrayElement[] = [1, 2, 'Hello', 3, 'World', 4];

console.log('Test 1 - Number array:');
processArrays(numberArray);

console.log('Test 2 - String array:');
processArrays(stringArray);

console.log('Test 3 - Mixed array:');
processArrays(mixedArray);

console.log('Test 4 - Multiple arrays:');
processArrays(numberArray, stringArray, mixedArray);

console.log('Test 5 - Invalid argument:');
// @ts-expect-error - Intentionally passing invalid type for testing
processArrays('not an array');
