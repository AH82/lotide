const assert = require("chai").assert;
const map = require("../map");

// TEST DATA
const words = ["ground", "control", "to", "major", "tom"];

describe("#map", () => {
  
  it("returns a modification of the entire array", () => {
    assert.deepEqual(
      map(
        words,
        word => word[0]
      ), [ 'g', 'c', 't', 'm', 't' ]
    );
    assert.deepEqual(
      map(
        ["1", "2", "3"],
        x => x + x
      ), ["11","22","33"]
    );
    assert.deepEqual(
      map(
        [1, 2, 3],
        x => x + x
      ), [2,4,6]
    );
  });

});

/*
// OLD CUSTOM ASSERTION TEST CASES
const results1 = map(words, word => word[0]);
console.log(results1);

//  ASSERTION TEST CASES
const assertArraysEqual = require("./assertArraysEqual")

assertArraysEqual(map(["1", "2", "3"], x => x + x), ["11","22","33"], true);
assertArraysEqual(map([1, 2, 3], x => x + x), [2,4,6], true);
assertArraysEqual(map(["1", "2", "3"], x => x * x), ["11","22","33"], false);
// assertArraysEqual(map(["1", "2", "3"], x => x+x ), ["11","22","33"], true);
// assertArraysEqual(map(["1", "2", "3"], x => x+x ), ["11","22","33"], true);
*/