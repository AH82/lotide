const countLetters = function(string) {
  let results = {};
  for (const ch of string) {
    if (ch !== ' ') { //This part added later to eliminate spaces
      if (results[ch]) {
        results[ch] += 1;
      } else {
        results[ch] = 1;
      }
    }
  }
  
  return results;
};

module.exports = countLetters;