const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  return arr.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
};

const multiply = function(arr) {
  return arr.reduce((acc, curr) => {
    return acc * curr;
  }, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(number) {
  if(number === 0 || number === 1)
    return 1;
  else return (factorial(number - 1) * number);
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
