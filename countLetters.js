const countLetters = function(string) {
  let results = {};
  // let count = 0;
  for (const ch of string) {
    //temp log
    // count++;
    // console.log(ch);

    //code
      
    if (ch !== ' ') { //This part added later to eliminate spaces
      if (results[ch]) {
        results[ch] += 1;
      } else {
        results[ch] = 1;
      }

    }
  }
  // console.log("total char count :", count); //temp
  return results;
};

module.exports = countLetters;