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
const without = function(source, itemsToRemove) {
  //return a NEW array with only those elements from source that are not present in the itemsToRemove array
  // element type is sensitive
  let destination = source;
  for (let destIndex = 0; destIndex < destination.length; destIndex++) {
    for (let itrIndex = 0; itrIndex < itemsToRemove.length; itrIndex++) {
      if (itemsToRemove[itrIndex] === destination[destIndex]) {
        // destination.push(dest[destIndex]);
        destination.splice(destIndex,1);
      }
    }

  }
  console.log(destination);
  return destination;
};

// TEST ASSERTION CODE
assertArraysEqual(without([1, 2, 3], [1]),[2,3],true);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1","2"], true);
const words = ["hello", "world", "lighthouse"];
assertArraysEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]), ["hello", "world"], true);
assertArraysEqual(words, ["hello", "world", "lighthouse"], true);

// SPECIFIC ONES
/* const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]); */