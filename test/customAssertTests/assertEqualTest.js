/* 
These are the original Test Cases 
used during earliest implementation
They are kept here for learning purposes
They will be Skipped by default.
*/

const assertEqual = require('../../assertEqual');


xdescribe("#assertEqual", () => {
  it("Original Test Cases", () => {
    // TEST CODE
    assertEqual("Lighthouse Labs", "Bootcamp");
    assertEqual(1, 1);
    assertEqual(2, 3);
    assertEqual("hahaha", "hahaha");
  });

});