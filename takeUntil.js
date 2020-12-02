const takeUntil = function(array, callback) {
  const resultArray = [];
  
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) {
      resultArray.push(array[i]);
    } else return resultArray;
  }
  return resultArray; // added post-bootcamp: handles no match: returns entire array if no match found; without it, it returns undefined.
};

module.exports = takeUntil;