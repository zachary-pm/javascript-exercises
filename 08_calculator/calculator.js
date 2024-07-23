const add = function(num1, num2) {
  return parseFloat(num1+num2);
};

const subtract = function(num1, num2) {
	return parseFloat(num1-num2);
};

const sum = function(array) {
  let output = 0
	for (i of array){
    output += i;
  }
  return parseFloat(output);
};

const multiply = function(array) {
  let output = array[0];
  array.splice(0, 1);
  for (i of array){
    output *= i;
  }
  return parseFloat(output);
};

const power = function(num, power) {
	let output = num;
  for (let i = 1; i < power; i++) {
    output *= num;
  }
  return parseFloat(output);
};

const factorial = function(factor) {
	if (factor == 0) return 1;
  let output = 1;
  for (let i = 1; i <= factor; i++){
    output *= i;
  }
  return parseFloat(output);
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
