const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
	return nums.reduce((total, cur) => total + cur
  , 0)
};

const multiply = function(nums) {
  return nums.reduce((product, cur) => product * cur
  , 1)
};

const power = function(base, exp) {
  return base ** exp;
	
};

const factorial = function(num) {
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }

  return product;
	
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
