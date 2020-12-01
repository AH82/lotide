const assert = require("chai").assert;
const letterPositions = require("../letterPositions");


describe("#letterPositions", () => {

  it("counts 1 word", () => {
    assert.deepEqual(letterPositions("LHL"), {
      L: [0, 2],
      H: [1]
    })
  });

  it("Counts a sentence excluding whitespaces", () => {
    assert.deepEqual(letterPositions("lighthouse in the house"), { 
      l: [0],
      i: [1, 11],
      g: [2],
      h: [3, 5, 15, 18],
      t: [4, 14],
      o: [6, 19],
      u: [7, 20],
      s: [8, 21],
      e: [9, 16, 22],
      n: [12]
    })
  });
});


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

let results1 = letterPositions("hello");
console.log(results1);
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

*/