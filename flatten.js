const assertArraysEqual = require('./assertArraysEqual');

// ACTUAL FUNCTION
const flatten = function(sourceArray) {
  // return flattened array of any nesting level (but implement just for 1)
  let tempArray = [];
  for (let i = 0; i < sourceArray.length; i++) {
    if (Array.isArray(sourceArray[i])) {
      for (let j = 0; j < sourceArray[i].length; j++) {
        // push into new array
        tempArray.push(sourceArray[i][j]);
      }
    }
    //back to the for-loop iteration, array copied, now delete it
    else tempArray.push(sourceArray[i]);
  }
  return tempArray;
};

// TEST ASSERTION CODE
assertArraysEqual(flatten([1, [2, 3], 4]),[1, 2, 3, 4],true);
assertArraysEqual(flatten([1, [2, 3], 4, [5,6]]),[1, 2, 3, 4, 5,6],true);

