const numbers = [1, 2, 3, 4, 5];

console.log(numbers.filter(n => n > 4));

console.log(numbers.reduce((acum, current) => acum + current, 25));

console.log(numbers.find(n => n === 3));

console.log('-------------------------');
console.log('Destruction of arrays');
let [a, b, c, d, e] = numbers;
console.log(a, b, c, d, e);

console.log('-------------------------');
console.log('Destruction of arrays with default values');
let [aa, bb, cc, dd, ee, ff = 0] = numbers;
console.log(aa, bb, cc, dd, ee, ff);

console.log('-------------------------');
console.log('Destruction of arrays with group  variables');
let [a1, b1, ...c1] = numbers;
console.log(a1, b1, c1);

console.log('-------------------------');
console.log('Destruction of arrays with ignore elements array');
let [a2, b2, , , c2] = numbers;
console.log(a2, b2, c2);

console.log('-------------------------');
console.log('Interpolation of variables');
console.log(a, b);
[b, a] = [a, b];
console.log(a, b);

console.log('-------------------------');
console.log('Insert array how to element\'s array');
const otherNumbers1 = [10, 20, 30, numbers];
console.log(otherNumbers1);

console.log('-------------------------');
console.log('Insert array how to menbers ');
const otherNumbers2 = [10, 20, 30, ...numbers];
console.log(otherNumbers2);