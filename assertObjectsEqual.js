/**
 * IMPORTANT NOTE:
 * In my original implementation of assertArrayEqual() - the function on which this one is based, due misorientation/misunderstanding of instruction,
 * I have "invented" a 3rd parameter called "expectedBool" in which you insert the the boolian you are expecting.
 * assertArraysEqual = function(leftArray, RightArray, expectedBool) will return true/false and insert it in a corresponding message for visual check.
 * this time though, I'm following instruction by the walkthrough, though will leave the equivalent implementation of assertArraysEqual() commented out.
 * an extra EoL comment //#EOIoAAE will be added to those statements.
 */
const eqObjects = require("./eqObjects");
const assertObjectsEqual = function(actual, expected) {
  // importing util library's inspect function, as per walkthrough instruction.
  const inspect = require('util').inspect;

  // my implementation >>
  if (eqObjects(actual, expected) === true) {
    // console.log(`✅✅✅ Object Assertion Passed: === TRUE.`);                  //#EOIoAAE
    // return true;                                                                //#EOIoAAE
    console.log(`✅✅✅ object ${inspect(actual)} === object ${inspect(expected)}`);
  } else {
    // console.log(`🛑🛑🛑 Object Assertion Failed: === False (!== true).`);      //#EOIoAAE
    // return false;                                                                //#EOIoAAE
    console.log(`🛑🛑🛑 object ${inspect(actual)} !== object ${inspect(expected)}`);
  }
  
  
};
module.exports = assertObjectsEqual;