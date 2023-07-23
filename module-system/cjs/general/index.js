const a = 10;
const b = 5;

/**
 * Destructure a returned "module.exports" object
 */
const { add, substract, multiply, divide } = require("./module.js"); // Synchronous

const sum = add(a, b);
const diff = substract(a, b);
const product = multiply(a, b);
const quotient = divide(a, b);

console.log(`${a} + ${b} = ${sum}`);
console.log(`${a} - ${b} = ${diff}`);
console.log(`${a} * ${b} = ${product}`);
console.log(`${a} / ${b} = ${quotient}`);
