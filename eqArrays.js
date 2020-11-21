const eqArrays = function(leftArray, rightArray) {

  console.log("Comparing Arrays: ", leftArray, "&& ", rightArray);
  
  if (leftArray.length !== rightArray.length) return false;
  for (let i = 0; i < leftArray.length; i++) {
    if (Array.isArray(leftArray[i]) && Array.isArray(rightArray[i])) {
      if (!eqArrays(leftArray[i], rightArray[i])) return false;
    } else if (leftArray[i] !== rightArray[i]) return false;
  }
  return true;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}.`);
  } else  console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}.`);
};

/* //Test cases
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3", "4"]), false);
assertEqual(eqArrays([1, 2, 3, 4], [3, 2, 1]), false);
assertEqual(eqArrays([], [3, 2, 1]), false); */

// TEST CASES : Recursion / deep comparison 
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
assertEqual(eqArrays([[2, 3], [4], 8], [[2, 3], [4], 8]), true);
assertEqual(eqArrays([[2, 3], [4], 8], [[2, 3], [4], 9]), false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);

module.exports = eqArrays;

