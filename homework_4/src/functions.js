function processArrays() {
    const arrays = Array.from(arguments);

    if (arrays.length === 0) {
        console.log("No arrays provided");
        return null;
    }

    arrays.forEach((arr, index) => {
        if (!Array.isArray(arr)) {
            console.warn(`Warning: Argument ${index + 1} is not an array`);
            return;
        }

        const hasNumbers = arr.some(item => typeof item === 'number');
        const hasStrings = arr.some(item => typeof item === 'string');

        if (hasNumbers && !hasStrings) {
            const sum = arr.reduce((sum, current) => sum + current, 0);
            console.log(`Array ${index + 1} (numbers) - Sum:`, sum);
        } else if (hasStrings && !hasNumbers) {
            const concatenated = arr.join('');
            console.log(`Array ${index + 1} (strings) - Concatenated:`, concatenated);
        } else {
            const numbers = arr.filter(item => typeof item === 'number');
            const strings = arr.filter(item => typeof item === 'string');

            if (numbers.length > 0) {
                const sum = numbers.reduce((sum, current) => sum + current, 0);
                console.log(`Array ${index + 1} (numbers part) - Sum:`, sum);
            }

            if (strings.length > 0) {
                const concatenated = strings.join('');
                console.log(`Array ${index + 1} (strings part) - Concatenated:`, concatenated);
            }
        }
    });
}

const numberArray = [1, 2, 3, 4, 5];
const stringArray = ["Hello", " ", "World", "!"];
const mixedArray = [1, 2, "Hello", 3, "World", 4];

console.log("Test 1 - Number array:");
processArrays(numberArray);

console.log("Test 2 - String array:");
processArrays(stringArray);

console.log("Test 3 - Mixed array:");
processArrays(mixedArray);

console.log("Test 4 - Multiple arrays:");
processArrays(numberArray, stringArray, mixedArray);

console.log("Test 5 - Invalid argument:");
processArrays("not an array");
