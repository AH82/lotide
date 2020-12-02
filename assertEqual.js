// Similar to built-in function console.assert() evaluating true or false .

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}.`);
  } else  {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}.`);
  }
};


module.exports = assertEqual;
