const eqArrays = function(leftArray, rightArray) {

  
  if (leftArray.length !== rightArray.length) return false;
  
  for (let i = 0; i < leftArray.length; i++) {
    if (Array.isArray(leftArray[i]) && Array.isArray(rightArray[i])) {
      if (!eqArrays(leftArray[i], rightArray[i])) return false;
    } else if (leftArray[i] !== rightArray[i]) return false;
  }

  return true;
};

module.exports = eqArrays;

