const stringArray = ['apple', 'banana', 'cherry'];
const numberArray = [1, 2, 3, 4, 5];
const booleanArray = [true, false, true, false];
const anyArray = ['text', 42, true, null, { key: 'value' }, [1, 2, 3, 4, 5]];

// filter
console.log(stringArray.filter(str => str.includes('a')));
console.log(numberArray.filter(num => num > 2));
console.log(booleanArray.filter(bool => bool));
console.log(anyArray.filter(item => typeof item === 'string'));

// find
console.log(stringArray.find(str => str.startsWith('b')));
console.log(numberArray.find(num => num > 3));
console.log(booleanArray.find(bool => bool === false));
console.log(anyArray.find(item => typeof item === 'object'));

// sort
console.log([...stringArray].sort());
console.log([...numberArray].sort((a, b) => b - a));
console.log([...booleanArray].sort());
const sortedAnyArray = [...anyArray].sort((a, b) => {
    const typeA = typeof a;
    const typeB = typeof b;

    const typeOrder = ['object', 'null', 'boolean', 'number', 'string'];
    const indexA = typeOrder.indexOf(typeA);
    const indexB = typeOrder.indexOf(typeB);

    if (indexA !== indexB) return indexA - indexB;

    if (typeA === 'number') return a - b;
    if (typeA === 'string') return a.localeCompare(b);
    if (typeA === 'boolean') return (a === b) ? 0 : a ? -1 : 1;
    return 0;
});
console.log(sortedAnyArray);

// concat
console.log(stringArray.concat(numberArray));
console.log(numberArray.concat(booleanArray));
console.log(booleanArray.concat(anyArray));
console.log(anyArray.concat(stringArray));

// includes
console.log(stringArray.includes('banana'));
console.log(numberArray.includes(3));
console.log(booleanArray.includes(false));
console.log(anyArray.includes(42));

// join
console.log(stringArray.join(', '));
console.log(numberArray.join(' - '));
console.log(booleanArray.join(' | '));
console.log(anyArray.join(' || '));

// spread оператор [...]
console.log([...stringArray, ...numberArray]);
console.log([...numberArray, ...booleanArray]);
console.log([...booleanArray, ...anyArray]);
console.log([...anyArray, ...stringArray]);

// forEach
stringArray.forEach(str => console.log(str.toUpperCase()));
numberArray.forEach(num => console.log(num * 2));
booleanArray.forEach(bool => console.log(!bool));
anyArray.forEach(item => console.log(typeof item));

// map
console.log(stringArray.map(str => str.length));
console.log(numberArray.map(num => num * 3));
console.log(booleanArray.map(bool => bool ? 1 : 0));
console.log(anyArray.map(item => JSON.stringify(item)));
