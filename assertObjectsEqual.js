const eqObjects = require("./eqObjects");

const assertObjectsEqual = function(actual, expected) {

  const inspect = require('util').inspect;  // importing util library's inspect function, as per walkthrough instruction.

  // my implementation
  if (eqObjects(actual, expected) === true) {
    console.log(`✅✅✅ object ${inspect(actual)} === object ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 object ${inspect(actual)} !== object ${inspect(expected)}`);
  }
  
};

module.exports = assertObjectsEqual;