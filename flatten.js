// return flattened array of any nesting level (but implement just for 1)

const flatten = function(sourceArray) {

  let tempArray = [];

  for (let i = 0; i < sourceArray.length; i++) {

    if (Array.isArray(sourceArray[i])) {
      for (let j = 0; j < sourceArray[i].length; j++) {
        tempArray.push(sourceArray[i][j]);
      }
    } else tempArray.push(sourceArray[i]);
  }

  return tempArray;
};

module.exports = flatten;