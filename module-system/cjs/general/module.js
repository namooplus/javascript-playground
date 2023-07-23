console.log("The whole lines would be read when imported.");

const add = (a, b) => {
  return a + b;
};

const substract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

/**
 * Assign to module.exports object
 */
module.exports = {
  add,
  substract,
  multiply,
  divide,
};
