const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');



const takeUntil = function(array, callback) {
  const resultArray = [];
  
  for (let i = 0; i < array.length; i++) {
    if(!callback(array[i])) {
      resultArray.push(array[i])
    } else return resultArray;
  }
  return resultArray; // added post-bootcamp: handles no match: returns entire array if no match found; without it, it returns undefined.
}



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