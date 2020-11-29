const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

describe("#eqArrays", () => {
  describe("Shallow Comparison", () => {
    it("Using #assertEqual", () => {
      //Test cases
      assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
      assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
      assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
      assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
      assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3", "4"]), false);
      assertEqual(eqArrays([1, 2, 3, 4], [3, 2, 1]), false);
      assertEqual(eqArrays([], [3, 2, 1]), false);

    });
  });
  
  describe("Deep Comparison with recursion", () => {
    it("Using #assertEqual", () => {
      // TEST CASES : Recursion / deep comparison 
      assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
      assertEqual(eqArrays([[2, 3], [4], 8], [[2, 3], [4], 8]), true);
      assertEqual(eqArrays([[2, 3], [4], 8], [[2, 3], [4], 9]), false);
      assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
      assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
    })
    
  });
});
