let stringTrueValue = 'true';
let stringFalseValue = 'false';
let stringValue40 = '40';
let stringValue20 = '20';
let stringValue40_2 = '40';
let numberValue20 = 20;
let numberValue5 = 5;
let numberValue15 = 15;
let numberValue25 = 25;
let numberValue25_2 = 25;
let numberValue1 = 1;
let numberValue0 = 0;
let nullValue = null;
let undefinedValue = undefined;
let booleanTrueValue = true;
let booleanFalseValue = false;

function toBoolean(value) {
    return !!value;
}

function nullishCoalescing(firstArg, secondArg) {
    console.log(`?? Operation: ${firstArg} && ${secondArg}`);
    return firstArg ?? secondArg;
}

function andOperation(firstArg, secondArg) {
    console.log(`AND Operation: ${firstArg} && ${secondArg}`);
    return firstArg && secondArg;
}

function isStrictEqual(firstArg, secondArg) {
    console.log(`Strict Equal: ${firstArg} === ${secondArg}`);
    return firstArg === secondArg;
}

function isEqual(firstArg, secondArg) {
    console.log(`Equal: ${firstArg} == ${secondArg}`);
    return firstArg == secondArg;
}

function isNotStrictEqual(firstArg, secondArg) {
    console.log(`Not Strict Equal: ${firstArg} !== ${secondArg}`);
    return firstArg !== secondArg;
}

function isNotEqual(firstArg, secondArg) {
    console.log(`Not Equal: ${firstArg} != ${secondArg}`);
    return firstArg != secondArg;
}

function isGreaterThan(firstArg, secondArg) {
    console.log(`Greater Than: ${firstArg} > ${secondArg}`);
    return firstArg > secondArg;
}

function isLessThan(firstArg, secondArg) {
    console.log(`Less Than: ${firstArg} < ${secondArg}`);
    return firstArg < secondArg;
}

function isGreaterThanOrEqual(firstArg, secondArg) {
    console.log(`Greater Than or Equal: ${firstArg} >= ${secondArg}`);
    return firstArg >= secondArg;
}

function isLessThanOrEqual(firstArg, secondArg) {
    console.log(`Less Than or Equal: ${firstArg} <= ${secondArg}`);
    return firstArg <= secondArg;
}

function logicalOr() {
    let result = false;
    for (let i = 0; i < arguments.length; i++) {
        console.log(`Argument ${i + 1}:`, arguments[i]);
        result = result || arguments[i];
        console.log(`Intermediate result after ${i + 1}-th argument:`, result);
    }
    return result;
}

function logicalAnd() {
    let result = true;
    for (let i = 0; i < arguments.length; i++) {
        console.log(`Argument ${i + 1}:`, arguments[i]);  // Логування поточного аргументу
        result = result && arguments[i];
        console.log(`Intermediate result after ${i + 1}-th argument:`, result); // Логування проміжного результату
    }
    return result;
}

//output: 15
console.log('Output 1:', andOperation(numberValue5, numberValue15));

console.log('----------');

//output: true
console.log('Output 2:', isStrictEqual((numberValue20 - numberValue5), numberValue15));

console.log('----------');

//output: true
console.log('Output 3:', isStrictEqual((stringValue40 - numberValue15), numberValue25));

console.log('----------');

//output: false
console.log('Output 4:', isStrictEqual((stringValue40 - numberValue15), numberValue20));

console.log('----------');

//output: false
console.log('Output 5:', isStrictEqual(stringValue20, numberValue20));

console.log('----------');

//output: true
console.log('Output 6:', isStrictEqual(numberValue25, numberValue25_2));

console.log('----------');

//output: false
console.log('Output 7:', isStrictEqual(stringTrueValue, booleanTrueValue));

console.log('----------');

//output: false
console.log('Output 8:', isStrictEqual(stringFalseValue, booleanFalseValue));

console.log('----------');

//output: true
console.log('Output 9:', isEqual(stringValue20, numberValue20));

console.log('----------');

//output: false
console.log('Output 10:', isEqual(numberValue20, numberValue5));

console.log('----------');

//output: true
console.log('Output 11:', isEqual(stringValue40, stringValue40_2));

console.log('----------');

//output: true
console.log('Output 12:', isEqual((numberValue20 - numberValue5), numberValue15));

console.log('----------');

//output: false
console.log('Output 13:', isEqual(nullValue, ''));

console.log('----------');

//output: false
console.log('Output 14:', isNotStrictEqual(numberValue25, numberValue25_2));

console.log('----------');

//output: true
console.log('Output 15:', isNotStrictEqual(stringValue20, numberValue20));

console.log('----------');

//output: true
console.log('Output 16:', isNotStrictEqual(numberValue20, numberValue25_2));

console.log('----------');

//output: false
console.log('Output 17:', isNotEqual(stringValue20, numberValue20));

console.log('----------');

//output: true
console.log('Output 17:', isEqual(toBoolean(stringTrueValue), toBoolean(stringFalseValue)));

console.log('----------');

//output: false
console.log('Output 18:', isEqual(booleanTrueValue, booleanFalseValue));

console.log('----------');

//output: false
console.log('Output 19:', isEqual(stringTrueValue, booleanTrueValue));

console.log('----------');

//output: true
console.log('Output 20:', isEqual(toBoolean(stringTrueValue), booleanTrueValue));

console.log('----------');

// output: true
console.log('Output 21:', isGreaterThan(numberValue20, numberValue5));

console.log('----------');

// output: false
console.log('Output 22:', isGreaterThan(numberValue5, numberValue15));

console.log('----------');

// output: false
console.log('Output 23:', isGreaterThan(stringFalseValue, stringTrueValue));

console.log('----------');

// output: true
console.log('Output 23:', isGreaterThan(booleanTrueValue, booleanFalseValue));

console.log('----------');

// output: true
console.log('Output 22:', isLessThan(numberValue5, numberValue15));

console.log('----------');

// output: false
console.log('Output 22:', isLessThan(numberValue20, numberValue5));

console.log('----------');

// output: false
console.log('Output 23:', isLessThan(stringValue20, numberValue20));

console.log('----------');

// output: false
console.log('Output 24:', isLessThan(stringValue40_2, numberValue20));

console.log('----------');

// output: true
console.log('Output 24:', isLessThan(stringValue20, numberValue25));

console.log('----------');

// output: true
console.log('Output 25:', isGreaterThanOrEqual(numberValue25, numberValue25_2));

console.log('----------');

// output: true
console.log('Output 26:', isGreaterThanOrEqual(stringValue20, numberValue20));

console.log('----------');

// output: true
console.log('Output 27:', isLessThanOrEqual(numberValue25, numberValue25_2));

console.log('----------');

// output: true
console.log('Output 28:', isLessThanOrEqual(stringValue20, numberValue20));

console.log('----------');

// output: false
console.log('Output 28:', isLessThanOrEqual(numberValue20, numberValue15));

console.log('----------');

// output: true
console.log('Output 29:', isLessThan(isGreaterThanOrEqual(numberValue20, numberValue25),
  numberValue15));

console.log('----------');

// output: true
console.log('Output 30:', logicalOr(booleanTrueValue, booleanTrueValue));

console.log('----------');

// output: true
console.log('Output 31:', logicalOr(booleanTrueValue, booleanFalseValue));

console.log('----------');

// output: true
console.log('Output 32:', logicalOr(booleanFalseValue, booleanTrueValue));

console.log('----------');

// output: false
console.log('Output 33:', logicalOr(booleanFalseValue, booleanFalseValue));

console.log('----------');

// output: 1
console.log('Output 34:', logicalOr(numberValue1, numberValue0));

console.log('----------');

// output: 5
console.log('Output 35:', logicalOr(numberValue5, numberValue15));

console.log('----------');

// output: 15
console.log('Output 36:', logicalOr(numberValue0, numberValue15, stringValue20));

console.log('----------');

// output: true
console.log('Output 37:', logicalOr(nullValue, stringTrueValue, stringValue20));

console.log('----------');

// output: 20
console.log('Output 38:', logicalOr(nullValue, booleanFalseValue, stringValue20));

console.log('----------');

// output: true
console.log('Output 39:', logicalAnd(booleanTrueValue, booleanTrueValue));

console.log('----------');

// output: false
console.log('Output 40:', logicalAnd(booleanTrueValue, booleanFalseValue));

console.log('----------');

// output: false
console.log('Output 41:', logicalAnd(booleanFalseValue, booleanTrueValue));

console.log('----------');

// output: false
console.log('Output 42:', logicalAnd(booleanFalseValue, booleanFalseValue));

console.log('----------');

// output: 0
console.log('Output 43:', logicalAnd(numberValue1, numberValue0));

console.log('----------');

// output: 15
console.log('Output 44:', logicalAnd(numberValue5, numberValue15));

console.log('----------');

// output: 0
console.log('Output 45:', logicalAnd(numberValue0, numberValue15, stringValue20));

console.log('----------');

// output: null
console.log('Output 46:', logicalAnd(nullValue, stringTrueValue, stringValue20));

console.log('----------');

// output: null
console.log('Output 47:', logicalAnd(nullValue, booleanFalseValue, stringValue20));

console.log('----------');

// output: 'true'
console.log('Output 48:', nullishCoalescing(nullValue, stringTrueValue));

// output: 'true'
console.log('Output 49:', nullishCoalescing(undefinedValue, stringTrueValue));

// output: 0
console.log('Output 50:', nullishCoalescing(numberValue0, stringTrueValue));

// output: false
console.log('Output 51:', nullishCoalescing(booleanFalseValue, stringTrueValue));
