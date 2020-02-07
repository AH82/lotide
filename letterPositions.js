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
// // ACTUAL FUNCTION ------ // THIS CODE WORKS!
// const letterPositions = function(sentence){ //sentence is a string 
//   const results = {};
//   // logic to update results here
//   for (let charIndex = 0; charIndex < sentence.length; charIndex++ ){
//     if (results[sentence[charIndex]] === undefined) {
//       results[sentence[charIndex]] = [];
//     }
//     results[sentence[charIndex]].push(charIndex);
//     // console.log(results); //test
//   }

//   return results;
// };

// ACTUAL FUNCTION 2 --- in contrast with countLetters.js
const letterPositions = function(sentence){ //sentence is a string 
  const results = {};
  // logic to update results here
  for (let charIndex = 0; charIndex < sentence.length; charIndex++ ){
    if (results[sentence[charIndex]] !== undefined) {
      results[sentence[charIndex]].push(charIndex);
    }
    else {
      results[sentence[charIndex]] = [];
      results[sentence[charIndex]].push(charIndex);
  }
    // console.log(results); //test
  }

  return results;
};

let results1 = letterPositions("hello");
console.log(results1)
let results2 = letterPositions("LHL");


// // TEST ASSERTION CODE

//Testing for "hello"
assertArraysEqual(results1.h, [0], true);
assertArraysEqual(results1.e, [1], true);
assertArraysEqual(results1.l, [2, 3], true);
assertArraysEqual(results1.o, [4], true);
assertArraysEqual(results1.l, [2], false);
assertArraysEqual(results1.l, [3], false);

// Testing for "LHL"
assertArraysEqual(results2.L, [0, 2], true);