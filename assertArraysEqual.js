const eqArrays = function(leftArray, rightArray) {
  if (leftArray.length !== rightArray.length) return false;
  for (let i = 0; i < leftArray.length; i++) {
    if (leftArray[i] !== rightArray[i]) return false;
  }
  return true;
};

const assertArraysEqual = function(leftArray, RightArray, expectedBool) {
  if (eqArrays(leftArray, RightArray) === expectedBool) {
    console.log(`✅✅✅ Assertion Passed: === ${expectedBool}.`);
    return true;
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: !== ${expectedBool}.`);
    return false;
  }


};

//test Cases
assertArraysEqual([1, 2, 3], [1, 2, 3], true);
assertArraysEqual([1, 2, 3], [1, 2, 3], true);
assertArraysEqual([1, 2, 3], [3, 2, 1], false);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"], true);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3], false);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3", "4"], false);
assertArraysEqual([1, 2, 3, 4], [3, 2, 1], false);
assertArraysEqual([], [3, 2, 1], false);


/*
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}.`)
  } else  console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}.`);
};
*/
