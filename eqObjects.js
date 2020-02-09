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


// ACTUAL FUNCTION

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


// TEST ASSERTION CODE

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
// eqObjects(ab, ba); // => true
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc); // => false
assertEqual(eqObjects(ab, abc), false);


// TEST ASSERTION CODE -- PART-2
// console.log("###\nAssertion part-2\n###");

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
// eqObjects(cd, dc); // => true
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqArrays(cd.d,dc.d), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
// eqObjects(cd, cd2); // => false

assertEqual(eqObjects(cd, cd2), false);
assertEqual(eqArrays(cd.d, cd2.d), false);




/* my original implementation
else {
    for (let itemKey in object1){
      if (object1.itemKey === object2.itemKey){
        for (let item of object1){
          if (object1.item === object2.item){
            return true;
            
        }
      
      }}
      else return false;
    }
  }

*/