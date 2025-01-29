let stringNumber = 'number';
let stringFive = 'five';
let stringForty = '40';
let stringTwo = '2';
let stringFourPx = '4px';
let stringFoo = 'foo';
let stringBar = 'bar';
let integer23 = 23;
let integer5 = 5;
let integer3 = 3;
let integer12 = 12;
let integer0 = 0;
let valueNull = null;
let valueUndefined = undefined;
let booleanTrue = true;
let booleanFalse = false;

function addValues(...values) {
    let sum = (typeof values[0] === 'string' ? '' : 0);
    for (let value of values) {
        console.log(`Adding: ${value}`);
        sum += value;
    }
    return sum;
}

function subtractValues(...values) {
    let result = values[0] || 0;
    console.log(`Starting subtraction with: ${result}`);
    for (let i = 1; i < values.length; i++) {
        console.log(`Subtracting: ${values[i]}`);
        result -= values[i];
    }
    return result;
}

function divideValues(dividend, divisor) {
    console.log(`Dividing: ${dividend} / ${divisor}`);
    return dividend / divisor;
}

function multiplyValues(multiplicand, multiplier) {
    console.log(`Multiplying: ${multiplicand} * ${multiplier}`);
    return multiplicand * multiplier;
}

function convertStringToNumber(str) {
    console.log(`Converting string to number: ${str}`);
    return +str;
}

function exponentiate(base, exponent) {
    console.log(`Exponentiating: ${base} ** ${exponent}`);
    return base ** exponent;
}

function calculateRemainder(dividend, divisor) {
    console.log(`Calculating remainder: ${dividend} % ${divisor}`);
    return dividend % divisor;
}

// output: "number235"
console.log("Output 1:", addValues(stringNumber, integer23, integer5));

console.log("----------");

// output: "28number"
console.log("Output 2:", addValues(integer23, integer5, stringNumber));

console.log("----------");

// output: 3
console.log("Output 3:", addValues(valueNull, integer3));

console.log("----------");

// output: five2
console.log("Output 4:", addValues(stringFive, convertStringToNumber(stringTwo)));

console.log("----------");

// output: 42
console.log("Output 5:", addValues(convertStringToNumber(stringForty), convertStringToNumber(stringTwo)));

console.log("----------");

// output: 35
console.log("Output 6:", subtractValues(stringForty, integer5));

console.log("----------");

// output: 1
console.log("Output 7:", addValues(booleanTrue, booleanFalse));

console.log("----------");

// output: NaN
console.log("Output 8:", subtractValues(stringFourPx, integer3));

console.log("----------");

// output: 17
console.log("Output 9:", subtractValues(stringForty, integer23));

console.log("----------");

// output: 2125
console.log("Output 10:", addValues(stringTwo, exponentiate(integer5, integer3)));

console.log("----------");

// output: 6
console.log("Output 11:", divideValues(integer12, stringTwo));

console.log("----------");

// output: 1
console.log("Output 12:", calculateRemainder(10, 3));

console.log("----------");

// output: NaN
console.log("Output 13:", addValues(valueUndefined, integer3));

console.log("----------");

// output: Infinity
console.log("Output 14:", divideValues(integer12, integer0));

console.log("----------");

// output: 15
console.log("Output 15:", multiplyValues(integer3, integer5));

console.log("----------");

// output: fooNaN
console.log("Output 16:", addValues(stringFoo, convertStringToNumber(stringBar)));

console.log("----------");

// output: 9
console.log("Output 17:", divideValues(exponentiate(integer3, integer3), integer3));
