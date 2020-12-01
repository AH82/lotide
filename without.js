const assertArraysEqual = require('./assertArraysEqual');

// ACTUAL FUNCTION
const without = function(source, itemsToRemove) {
  //return a NEW array with only those elements from source that are not present in the itemsToRemove array
  // element type is sensitive
  let destination = [...source];
  for (let destIndex = 0; destIndex < destination.length; destIndex++) {
    for (let itrIndex = 0; itrIndex < itemsToRemove.length; itrIndex++) {
      if (itemsToRemove[itrIndex] === destination[destIndex]) {
        // destination.push(dest[destIndex]);
        destination.splice(destIndex,1);
      }
    }

  }
  // console.log(destination);
  return destination;
};

module.exports = without;