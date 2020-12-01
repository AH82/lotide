const flatten = require("../flatten");
const assert = require("chai").assert;


describe("#flatten", () => {
  describe("One Nesting Level", () => {
    
    it("flattens [1, [2, 3], 4] to [1, 2, 3, 4]", () => {
      assert.deepEqual(flatten([1, [2, 3], 4]), [1, 2, 3, 4],);
    });
  
    it("flattens [1, [2, 3], 4, [5,6]] to [1, 2, 3, 4, 5, 6]", () => {
      assert.deepEqual(flatten([1, [2, 3], 4, [5,6]]), [1, 2, 3, 4, 5, 6]);
    });

  });
});

// // OLD CUSTOM ASSERTION TEST CODE
// const assertArraysEqual = require('../assertArraysEqual');
// assertArraysEqual(flatten([1, [2, 3], 4]),[1, 2, 3, 4],true);
// assertArraysEqual(flatten([1, [2, 3], 4, [5,6]]),[1, 2, 3, 4, 5,6],true);