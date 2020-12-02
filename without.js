//return a NEW array with only those elements from source that are not present in the itemsToRemove array

const without = function(source, itemsToRemove) {

  let destination = [...source]; // bug fix post-bootcamp to return a new array instead of altering existant.

  for (let destIndex = 0; destIndex < destination.length; destIndex++) {

    for (let itrIndex = 0; itrIndex < itemsToRemove.length; itrIndex++) {
      
      if (itemsToRemove[itrIndex] === destination[destIndex]) {
        destination.splice(destIndex,1);
      }
    }

  }

  return destination;
};

module.exports = without;