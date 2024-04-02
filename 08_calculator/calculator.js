const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(array) {
	return array.reduce((sum, currentValue) => sum + currentValue, 0)
};

const multiply = function(array) {
  return array.reduce((sum, currentValue) => sum * currentValue, 1)
};

const power = function(a, b) {
	return Math.pow(a, b)
};

const factorial = function(num) {
  let total = 1
	for (i = num; i > 0; i--) {
    total *= i
  }
  return total
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
