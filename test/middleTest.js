const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

// TEST ASSERTION CODE
// TESTING RETURN OF EMPTY STRING
assertArraysEqual(middle([]),[],true);
assertArraysEqual(middle([1]),[],true);
assertArraysEqual(middle([5,6]),[],true);
assertArraysEqual(middle([1,2,3]),[],false);
assertArraysEqual(middle([1,2,3,4]),[],false);
console.log(`----------------------`);
// TESTING RETURN OF ODD NUMBERED ARRAYS
assertArraysEqual(middle([1]),[1],false);
assertArraysEqual(middle([1,2,3]),[2],true);
assertArraysEqual(middle([1,2,3,4,5]),[3],true);
console.log(`----------------------`);
// TESTING RETURN OF EVEN NUMBERED ARRAYS
console.log(`\n  --- ASSERTING ---  2 elements`);
assertArraysEqual(middle([1,2]),[1],false);
assertArraysEqual(middle([1,2]),[2],false);
console.log(`\n  --- ASSERTING ---  4 elements`);
assertArraysEqual(middle([1,2,3,4]),[2,3],true);
assertArraysEqual(middle([1,2,3,4]),[1,2],false);
assertArraysEqual(middle([1,2,3,4]),[3,4],false);
assertArraysEqual(middle([1,2,3,4]),[2],false);
assertArraysEqual(middle([1,2,3,4]),[3],false);
console.log(`\n  --- ASSERTING ---  6 elements`);
assertArraysEqual(middle([1,2,3,4,5,6]),[3,4],true);
assertArraysEqual(middle([1,2,3,4,5,6]),[2,3],false);
assertArraysEqual(middle([1,2,3,4,5,6]),[4,5],false);
assertArraysEqual(middle([1,2,3,4,5,6]),[2,4],false);
assertArraysEqual(middle([1,2,3,4,5,6]),[4,5],false);


