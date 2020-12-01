
// // ACTUAL FUNCTION ------ // THIS CODE WORKS!
// const letterPositions = function(sentence){ //sentence is a string
//   const results = {};
//   // logic to update results here
//   for (let charIndex = 0; charIndex < sentence.length; charIndex++ ){
//     if (results[sentence[charIndex]] === undefined) {
//       results[sentence[charIndex]] = [];
//     }
//     results[sentence[charIndex]].push(charIndex);
//     // console.log(results); //test
//   }

//   return results;
// };

// ACTUAL FUNCTION 2 --- in contrast with countLetters.js
const letterPositions = function(sentence) { //sentence is a string
  const results = {};
  // logic to update results here
  for (let charIndex = 0; charIndex < sentence.length; charIndex++) {
    
    if (results[sentence[charIndex]] !== undefined) {
      results[sentence[charIndex]].push(charIndex);
    } else {
      results[sentence[charIndex]] = [];
      results[sentence[charIndex]].push(charIndex);
    }
    // console.log(results); //test
  }

  return results;
};

module.exports = letterPositions;
