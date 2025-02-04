for (let i = 0; i <= 10; i++) {
    console.log(i);
}

let k = 0;
while (k <= 10) {
    console.log(k);
    k++;
}

let a = 0;
do {
    console.log(a);
    a++;
} while (a <= 10);

const numbers1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const num of numbers1) {
    console.log(num);
}

for (let i = 100; i >= 0; i -= 10) {
    console.log(i);
}

let j = 100;
while (j >= 0) {
    console.log(j);
    j -= 10;
}

let l = 100;
do {
    console.log(l);
    l -= 10;
} while (l >= 0);

const numbers = [...Array(101).keys()];
numbers.reverse();

for (const num of numbers) {
    if (num % 10 === 0) {
        console.log(num);
    }
}
