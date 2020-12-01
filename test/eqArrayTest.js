const assert = require("chai").assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  
  describe("returns TRUE when", () => {
    it("arrays of numbers are identical", () => {
      assert.isTrue(
        eqArrays([1, 2, 3], [1, 2, 3])
      );
    });

    it("arrays of strings are identical", () => {
      assert.isTrue(
        eqArrays(["1", "2", "3"], ["1", "2", "3"])
      );
    });

  });

  describe("returns FALSE when", () => {

    it("arrays' elements are strict equal (not coersed)", () => {
      assert.isFalse(
        eqArrays(["1", "2", "3"], ["1", "2", 3])
      );
    });

    it("arrays' length are not equals", () => {
      assert.isFalse(
        eqArrays(["1", "2", "3", "4"], ["1", "2", "3"])
        
      );
      assert.isFalse(
        eqArrays([1, 2, 3, 4], [3, 2, 1])
      );
    });

    it("one of the arrays is empty", () => {
      assert.isFalse(
        eqArrays([], [3, 2, 1])
      );
      assert.isFalse(
        eqArrays([3, 2, 1], [])
      );
    });

  });

  describe("Deep Comparison (recursion)", () => {
    
    describe("returns TRUE when", () => {
      
      it("all arrays & their nested arrays are equal", () => {
        assert.isTrue(
          eqArrays(
            [[2, 3], [4]],
            [[2, 3], [4]]
          )
        );
        assert.isTrue(
          eqArrays(
            [[2, 3], [4], 8],
            [[2, 3], [4], 8]
          )
        );
        assert.isTrue(
          eqArrays(
            [[2, [[[3]], 9]], [4], 8],
            [[2, [[[3]], 9]], [4], 8]
          )
        );
      });

    });
  
    describe("returns FALSE when", () => {

      it("nested array of same length are not equal", () => {
        assert.isFalse(
          eqArrays(
            [[2, 3], [4], 8],
            [[2, 3], [5], 8]
          )
        );
      });

      it("nested arrays are not of equal length to otherwise identical arrays", () => {
        assert.isFalse(
          eqArrays(
            [[2, 3], [4]],
            [[2, 3], [4, 4]]
          )
        );
        assert.isFalse(
          eqArrays(
            [[2, 3], [4, 4]],
            [[2, 3], [4]]
          )
        );
      });

      it("element is not equal to a nested array with same element value", () => {
        assert.isFalse(
          eqArrays(
            [[2, 3], [4]],
            [[2, 3], 4]
          )
        );
      });

    });

  });

});


/*
// OLD CUSTOM TEST CASES

const assertEqual = require('../assertEqual');


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3", "4"]), false);
assertEqual(eqArrays([1, 2, 3, 4], [3, 2, 1]), false);
assertEqual(eqArrays([], [3, 2, 1]), false);

  // TEST CASES : Recursion / deep comparison
  assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
  assertEqual(eqArrays([[2, 3], [4], 8], [[2, 3], [4], 8]), true);
  assertEqual(eqArrays([[2, 3], [4], 8], [[2, 3], [4], 9]), false);
  assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
  assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);

*/