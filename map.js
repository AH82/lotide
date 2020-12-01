
const words = ["ground", "control", "to", "major", "tom"];
// let wordswords.map( (word) => /*return*/  word  );
const map = function(array, callback) {
  
  // temporary code:
  // console.log('array: ', array);
  // console.log('callback: ', callback);
  
  const results = [];
  // Adding a for..of loop
  for (let item of array) {
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---');
    results.push(callback(item));

  }

  return results;

};
module.exports = map;