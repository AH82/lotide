const eqArrays = require('./eqArrays');
/* const eqArrays = function(leftArray, rightArray) {
  if (leftArray.length !== rightArray.length) return false;
  for (let i = 0; i < leftArray.length; i++) {
    if (leftArray[i] !== rightArray[i]) return false;
  }
  return true;
}; */

const assertArraysEqual = function(leftArray, RightArray, expectedBool) {
  if (eqArrays(leftArray, RightArray) === expectedBool) {
    console.log(`✅✅✅ Assertion Passed: === ${expectedBool}.`);
    return true;
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: !== ${expectedBool}.`);
    return false;
  }
};
module.exports = assertArraysEqual;

//Test cases went to their own file test/assertArraysEqualTest.js


/*
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}.`)
  } else  console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}.`);
};
*/
