type ValidArrayItem = number | string;

const arrayProcessor = (...arrays: ValidArrayItem[][]): null | void => {
    if (arrays.length === 0) {
        console.log('No arrays provided');
        return null;
    }

    arrays.forEach((arr: ValidArrayItem[], index: number): void => {

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
};

const arrayWithNumbers: number[] = [1, 2, 3, 4, 5];
const arrayWithString: string[] = ['Hello', ' ', 'World', '!'];
const arrayWithDifferentValues: ValidArrayItem[] = [1, 2, 'Hello', 3, 'World', 4];

console.log('Test 1 - Number array:');
arrayProcessor(arrayWithNumbers);

console.log('Test 2 - String array:');
arrayProcessor(arrayWithString);

console.log('Test 3 - Mixed array:');
arrayProcessor(arrayWithDifferentValues);

console.log('Test 4 - Multiple arrays:');
arrayProcessor(arrayWithNumbers, arrayWithString, arrayWithDifferentValues);

console.log('Test 5 - Invalid argument:');
// @ts-expect-error - Intentionally passing invalid type for testing
arrayProcessor('not an array');
