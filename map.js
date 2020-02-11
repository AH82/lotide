//  ASSERTION FUNCTIONS

const eqArrays = function(leftArray, rightArray) {
  if (leftArray.length !== rightArray.length) return false;
  for (let i = 0; i < leftArray.length; i++) {
    if (leftArray[i] !== rightArray[i]) return false;
  }
  return true;
};

const assertArraysEqual = function(leftArray, RightArray, expectedBool) {
  if (eqArrays(leftArray, RightArray) === expectedBool) {
    console.log(`✅✅✅ Assertion Passed: === ${expectedBool}.`);
    return true;
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: !== ${expectedBool}.`);
    return false;
  }
};



//  ACTUAL FUNCTION & CODE

const words = ["ground", "control", "to", "major", "tom"];
// let wordswords.map( (word) => /*return*/  word  );
const map = function(array, callback) {
  
  // temporary code:
  // console.log('array: ', array);
  // console.log('callback: ', callback);
  
  const results = [];
  // Adding a for..of loop
  for (let item of array) {
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---');
    results.push(callback(item));

  }

  return results;

};

//
const results1 = map(words, word => word[0]);
console.log(results1);

//  ASSERTION TEST CASES
assertArraysEqual(map(["1", "2", "3"], x => x + x), ["11","22","33"], true);
assertArraysEqual(map([1, 2, 3], x => x + x), [2,4,6], true);
assertArraysEqual(map(["1", "2", "3"], x => x * x), ["11","22","33"], false);
// assertArraysEqual(map(["1", "2", "3"], x => x+x ), ["11","22","33"], true);
// assertArraysEqual(map(["1", "2", "3"], x => x+x ), ["11","22","33"], true);


// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1","2"], true);
// const palabras = ["hello", "world", "lighthouse"];
// assertArraysEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]), ["hello", "world"], true);
// assertArraysEqual(palabras, ["hello", "world", "lighthouse"], true);