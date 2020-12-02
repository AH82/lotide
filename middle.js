
const middle = function(arrayH) {

  let newArray = [];

  if (arrayH.length === 0 || arrayH.length === 1 || arrayH.length === 2) return newArray;

  let midIndex = Math.floor(arrayH.length / 2);

  if (arrayH.length % 2 !== 0) {
    // return single middle
    newArray.push(arrayH[midIndex]);
    return newArray;
  }

  if (arrayH.length % 2 === 0) {
    //return double middle
    newArray.push(arrayH[midIndex - 1]);
    newArray.push(arrayH[midIndex]);
    return newArray;
  }

};

module.exports = middle;