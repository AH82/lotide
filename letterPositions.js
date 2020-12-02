
const letterPositions = function(sentence) {

  const results = {};
  
  for (let charIndex = 0; charIndex < sentence.length; charIndex++) {

    if (sentence[charIndex] !== ' ') {
      if (results[sentence[charIndex]] !== undefined) {
        results[sentence[charIndex]].push(charIndex);
      } else {
        results[sentence[charIndex]] = [];
        results[sentence[charIndex]].push(charIndex);
      }
    }

  }

  return results;
};

module.exports = letterPositions;
