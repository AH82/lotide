/* 
These are the original Test Cases 
used during earliest implementation
They are kept here for learning purposes
They will be Skipped by default.
*/

const assertObjectsEqual = require("../../assertObjectsEqual");

xdescribe('#assertObjectsEqual', () => {

  it('Original Test Cases', () => {
    // TEST ASSERTION CODE
    assertObjectsEqual({a:1, b:2, c:3}, {a:1, b:2, c:3});
    assertObjectsEqual({a:1, b:2, c:3}, {a:1, b:2, c:4});
  });

});