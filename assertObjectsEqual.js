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
const assertObjectsEqual = function(actual, expected) {
  if (eqObjects(actual, expected) === true) {
      console.log(`✅✅✅ Object Assertion Passed: === TRUE.`);
      // return true;
    } else {
      console.log(`🛑🛑🛑 Object Assertion Failed: === False (!== true).`);
      // return false;
    }
  
};
// TEST ASSERTION CODE