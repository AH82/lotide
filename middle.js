

/* // TEST/ASSERTION FUNCTIONS

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
*/

// ACTUAL FUNCTION

const middle = function(arrayH) {
  let newArray = [];
  if (arrayH.length === 0 || arrayH.length === 1 || arrayH.length === 2) return newArray;
  let midIndex = Math.floor(arrayH.length / 2);
  if (arrayH.length % 2 !== 0) {
    // return single middle
    newArray.push(arrayH[midIndex]);
    return newArray;
  }
  if (arrayH.length % 2 === 0) {
    //return double middle
    newArray.push(arrayH[midIndex - 1]);
    newArray.push(arrayH[midIndex]);
    return newArray;
  }
};

module.exports = middle;
// TES
// TEST ASSERTION CODE NOW HAVE THEIR OWN FILE ./test/middleTest.js
