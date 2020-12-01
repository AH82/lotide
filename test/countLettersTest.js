const assert = require("chai").assert;
const countLetters = require("../countLetters")

describe("#countLetters", () => {
  
  it(`counts:
      LHL 
      => { L: 2, H: 1 }`, () => {
    assert.deepEqual(countLetters("LHL"), {
      L: 2,
      H: 1
    })
  });

  it(`Doesn't count spaces:
      lighthouse in the house 
      => { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1}`, () => {
    assert.deepEqual(countLetters("lighthouse in the house"), {
      l: 1,
      i: 2,
      g: 1,
      h: 4,
      t: 2,
      o: 2,
      u: 2,
      s: 2,
      e: 3,
      n: 1
    })
  });

});


// // OLD CUSTOM ASSERTION TEST CODE
// let resultTemp1 = countLetters("LHL");
// let resultTemp2 = countLetters("ahmed hatem attia");
// let resultTemp3 = countLetters("lighthouse in the house");
// console.log(resultTemp1);
// console.log(resultTemp2);

// // TEST ASSERTION CODE
// const assertEqual = require("../assertEqual");
// // assertEqual(countLetters("ahmedhatemattia"), { a: 4, h: 2, m: 2, e: 2, d: 1, t: 3, i: 1} );
// assertEqual(resultTemp1.L, 2);
// assertEqual(resultTemp1.H, 1);