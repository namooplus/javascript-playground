import { add, substract, multiply, divide } from "./module.js";

const a = 10;
const b = 5;

const sum = add(a, b);
const diff = substract(a, b);
const product = multiply(a, b);
const quotient = divide(a, b);

console.log(`${a} + ${b} = ${sum}`);
console.log(`${a} - ${b} = ${diff}`);
console.log(`${a} * ${b} = ${product}`);
console.log(`${a} / ${b} = ${quotient}`);
