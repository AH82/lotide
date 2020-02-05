// TEST/ASSERTION FUNCTIONS

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

// TEST ASSERTION CODE
// TESTING RETURN OF EMPTY STRING
assertArraysEqual(middle([]),[],true);
assertArraysEqual(middle([1]),[],true);
assertArraysEqual(middle([5,6]),[],true);
assertArraysEqual(middle([1,2,3]),[],false);
assertArraysEqual(middle([1,2,3,4]),[],false);
console.log(`----------------------`);
// TESTING RETURN OF ODD NUMBERED ARRAYS
assertArraysEqual(middle([1]),[1],false);
assertArraysEqual(middle([1,2,3]),[2],true);
assertArraysEqual(middle([1,2,3,4,5]),[3],true);
console.log(`----------------------`);
// TESTING RETURN OF EVEN NUMBERED ARRAYS
console.log(`\n  --- ASSERTING ---  2 elements`);
assertArraysEqual(middle([1,2]),[1],false);
assertArraysEqual(middle([1,2]),[2],false);
console.log(`\n  --- ASSERTING ---  4 elements`);
assertArraysEqual(middle([1,2,3,4]),[2,3],true);
assertArraysEqual(middle([1,2,3,4]),[1,2],false);
assertArraysEqual(middle([1,2,3,4]),[3,4],false);
assertArraysEqual(middle([1,2,3,4]),[2],false);
assertArraysEqual(middle([1,2,3,4]),[3],false);
console.log(`\n  --- ASSERTING ---  6 elements`);
assertArraysEqual(middle([1,2,3,4,5,6]),[3,4],true);
assertArraysEqual(middle([1,2,3,4,5,6]),[2,3],false);
assertArraysEqual(middle([1,2,3,4,5,6]),[4,5],false);
assertArraysEqual(middle([1,2,3,4,5,6]),[2,4],false);
assertArraysEqual(middle([1,2,3,4,5,6]),[4,5],false);


