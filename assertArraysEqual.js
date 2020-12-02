
/**
 * IMPORTANT NOTE:
 * In my original implementation of assertArrayEqual() - the function on which this one is based, due misorientation/misunderstanding of instruction,
 * I have "invented" a 3rd parameter called "expectedBool" in which you insert the the boolian you are expecting.
 * assertArraysEqual = function(leftArray, RightArray, expectedBool) will return true/false and insert it in a corresponding message for visual check.
 */

const eqArrays = require('./eqArrays');

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