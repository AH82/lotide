// TEST/ASSERTION FUNCTIONS

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}.`);
  } else  console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}.`);
};


// ACTUAL FUNCTION

const countLetters = function(string){
  let results = {};
  // let count = 0;
  for (const ch of string){
      //temp log
      // count++;
      // console.log(ch);

      //code
      
      if (ch !== ' '){ //This part added later to eliminate spaces
        if (results[ch]){
          results[ch] += 1;
        } else {
          results[ch] = 1;
        }

      }
  }
  // console.log("total char count :", count); //temp
  return results;
};
let resultTemp1 = countLetters("LHL");
let resultTemp2 = countLetters("ahmed hatem attia");
let resultTemp3 = countLetters("lighthouse in the house"); 
console.log(resultTemp1);
console.log(resultTemp2);

// TEST ASSERTION CODE

// assertEqual(countLetters("ahmedhatemattia"), { a: 4, h: 2, m: 2, e: 2, d: 1, t: 3, i: 1} );
assertEqual(resultTemp1.L, 2);
assertEqual(resultTemp1.H, 1);
