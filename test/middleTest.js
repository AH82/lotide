const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  // TESTING RETURN OF EMPTY STRING.
  it("returns [] for []", ()=> {
    assert.deepEqual(middle([]), []);
  });
  it("returns [] for [1]", ()=> {
    assert.deepEqual(middle([1]), []);
  });
  it("returns [] for [5, 6]", ()=> {
    assert.deepEqual(middle([5, 6]), []);
  });
  it("[1, 2, 3] doesn't return []", ()=> {
    assert.notDeepEqual(middle([1, 2, 3]), []);
  });
  it("[1, 2, 3, 4] doesn't return []", ()=> {
    assert.notDeepEqual(middle([1, 2, 3, 4]), []);
  });

  //TESTING RETURN OF ODD NUMBERED ARRAYS
  it("ODD array of [1] doesn't return [1]", ()=> {
    assert.notDeepEqual(middle([1]), [1]);
  });
  it("ODD array of [1, 2, 3] return [2]", ()=> {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("ODD array of [1, 2, 3, 4 ,5] return [3]", ()=> {
    assert.deepEqual(middle([1, 2, 3, 4 ,5]), [3]);
  });
// TESTING RETURN OF EVEN NUMBERED ARRAYS
  it("EVEN array of [1, 2] do not return [1]", ()=> {
    assert.notDeepEqual(middle([1, 2]), [1]);
  });
  it("EVEN array of [1, 2] do not return [2]", ()=> {
    assert.notDeepEqual(middle([1, 2]), [2]);
  });
  it("EVEN array of [1, 2, 3, 4] returns [2, 3]", ()=> {
    assert.deepEqual(middle([1, 2, 3, 4]), [2,3]);
  });
  it("EVEN array of [1, 2, 3, 4] do not return [1, 2]", ()=> {
    assert.notDeepEqual(middle([1, 2, 3, 4]), [1, 2]);
  });
  it("EVEN array of [1, 2, 3, 4] do not return [3, 4]", ()=> {
    assert.notDeepEqual(middle([1, 2, 3, 4]), [3, 4]);
  });
  it("EVEN array of [1, 2, 3, 4] do not return [2]", ()=> {
    assert.notDeepEqual(middle([1, 2, 3, 4]), [2]);
  });  it("EVEN array of [1, 2, 3, 4] do not return [3]", ()=> {
    assert.notDeepEqual(middle([1, 2, 3, 4]), [3]);
  });
});

// ------------------------------------------------------
// THE FOLLOWING IS OLD CODE 
// THAT SHOULD BE DELETED AS PER "COMPASS" INSTRUCTIONS.
// I'M KEEPING THE CODE FOR LEARNING PURPOSES.
// ------------------------------------------------------

/* const middle = require('../middle');
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


 */