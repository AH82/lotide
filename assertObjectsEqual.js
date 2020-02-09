// TEST/ASSERTION FUNCTIONS
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}.`);
  } else  console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}.`);
};
const eqArrays = function(leftArray, rightArray) {
  if (leftArray.length !== rightArray.length) return false;
  for (let i = 0; i < leftArray.length; i++) {
    if (leftArray[i] !== rightArray[i]) return false;
  }
  return true;
};
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    // console.log(`false from length`)
    return false;
  } else {
    for (let arrKey of Object.keys(object1)) {
      
      // console.log(`arrKey = ${arrKey} && object1[arrKey] = ${object1[arrKey]} && object2[arrKey] = ${object2[arrKey]}`);
      if (Array.isArray(object1[arrKey])) {
        // console.log(`i'm in the isArray`);
        if (!eqArrays(object1[arrKey], object2[arrKey])) {
          // console.log(`arrays are not equals`)
          return false;
        }
      } else if (object1[arrKey] !== object2[arrKey]) {
        // console.log(`false from the loop-if`);
        return false;
      }
    }
    return true;
  }
};

// ACTUAL FUNCTION
/**
 * IMPORTANT NOTE:
 * In my original implementation of assertArrayEqual() - the function on which this one is based, due misorientation/misunderstanding of instruction,
 * I have "invented" a 3rd parameter called "expectedBool" in which you insert the the boolian you are expecting.
 * assertArraysEqual = function(leftArray, RightArray, expectedBool) will return true/false and insert it in a corresponding message for visual check.
 * this time though, I'm following instruction by the walkthrough, though will leave the equivalent implementation of assertArraysEqual() commented out.
 * an extra EoL comment //#EOIoAAE will be added to those statements. 
 */
const assertObjectsEqual = function(actual, expected) {
  // importing util library's inspect function, as per walkthrough instruction.
  const inspect = require('util').inspect; 

  // my implementation >>
  if (eqObjects(actual, expected) === true) {
    // console.log(`✅✅✅ Object Assertion Passed: === TRUE.`);                  //#EOIoAAE
    // return true;                                                                //#EOIoAAE
    console.log(`✅✅✅ object ${actual} === object ${expected}`);
  } else { 
    // console.log(`🛑🛑🛑 Object Assertion Failed: === False (!== true).`);      //#EOIoAAE
    // return false;                                                                //#EOIoAAE
    console.log(`🛑🛑🛑 object ${actual} !== object ${expected}`);
    }
  
};
// TEST ASSERTION CODE
assertObjectsEqual({a:1, b:2, c:3}, {a:1, b:2, c:3});
assertObjectsEqual({a:1, b:2, c:3}, {a:1, b:2, c:4});
