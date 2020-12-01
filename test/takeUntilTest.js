const assert = require("chai").assert;
const takeUntil = require("../takeUntil");

// TEST DATA
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];


describe("#takeUntil", () => {
  
  it("returns a subset of array from first element until first truthy value by callback", () => {
    assert.deepEqual(takeUntil(data1, x => x < 0),[ 1, 2, 5, 7, 2 ]);
    assert.deepEqual(takeUntil(data2, x => x === ','),[ 'I\'ve', 'been', 'to', 'Hollywood' ]);
  });

  it("returns the entire array if no truthy value matches from the callback", () => {
    assert.deepEqual(takeUntil(data1, x => x === 0), data1);
  });
  
});

/*
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');


// expected input //
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// test cases :
assertArraysEqual(takeUntil(data1, x => x < 0),[ 1, 2, 5, 7, 2 ],true);
assertArraysEqual(takeUntil(data2, x => x === ','),[ 'I\'ve', 'been', 'to', 'Hollywood' ],true);
*/