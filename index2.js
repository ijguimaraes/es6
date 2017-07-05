var sayHello = name => `Hello ${name}`;
var printHello = (name) => {
  console.log(`Hello ${name}`);
};
var getSibling = n => ({ previous: n - 1, next: n + 1 });

console.log(sayHello);
console.log(sayHello('Eu'));
printHello('Joaquim');
console.log(getSibling(10));