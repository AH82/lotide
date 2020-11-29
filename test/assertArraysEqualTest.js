/* 
These are the original Test Cases 
used during earliest implementation
They are kept here for learning purposes
They will be Skipped by default.
*/

const assertArraysEqual = require('../assertArraysEqual');

xdescribe("#assertArraysEqual", () => {

  it('Original Test Cases', () => {
    //test Cases
    assertArraysEqual([1, 2, 3], [1, 2, 3], true);
    assertArraysEqual([1, 2, 3], [1, 2, 3], true);
    assertArraysEqual([1, 2, 3], [3, 2, 1], false);
    assertArraysEqual(["1", "2", "3"], ["1", "2", "3"], true);
    assertArraysEqual(["1", "2", "3"], ["1", "2", 3], false);
    assertArraysEqual(["1", "2", "3"], ["1", "2", "3", "4"], false);
    assertArraysEqual([1, 2, 3, 4], [3, 2, 1], false);
    assertArraysEqual([], [3, 2, 1], false);
  });

});
