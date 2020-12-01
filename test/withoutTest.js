const assert = require("chai").assert;
const without = require("../without");

describe("#without", () => {

  it("should return a new array and not alter original", () => {
    const words = ["hello", "world", "lighthouse"];
    const result = without(words, ["lighthouse"]);
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
    assert.notDeepEqual(words, result);
  });

  it("returns subset, with single matching element in itemsToRemove array", () => {
    assert.deepEqual(
      without(
        [1, 2, 3], [1]
      ), [2, 3]
    );
  });

  it("returns subset, with both matching and unmatching elements in the itemsToRemove array", () => {
    assert.deepEqual(
      without(
        ["1", "2", "3"],
        [1, 2, "3"]
      ),
      ["1", "2"]
    );
  });
  it("returns the entire array if no match elements in the itemsToRemove array", () => {
    const words = ["hello", "world", "lighthouse"];
    assert.deepEqual(
      without(
        words,
        ["cheerios"]
      ),
      ["hello", "world", "lighthouse"]
    );
  });

});

// // TEST ASSERTION CODE
// assertArraysEqual(without([1, 2, 3], [1]),[2,3],true);
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1","2"], true);
// const words = ["hello", "world", "lighthouse"];
// assertArraysEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]), ["hello", "world"], true);
// assertArraysEqual(words, ["hello", "world", "lighthouse"], true);

// SPECIFIC ONES
/*
const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
*/