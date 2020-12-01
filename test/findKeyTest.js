const assert = require("chai").assert;
const findKey = require("../findKey");

describe("#findKey", () => {
  it("should return the first key it finds matching callback", () => {
    assert.equal(
      findKey({
        "Blue Hill": { stars: 1 },
        "Akaleri":   { stars: 3 },
        "noma":      { stars: 2 },
        "elBulli":   { stars: 3 },
        "Ora":       { stars: 2 },
        "Akelarre":  { stars: 3 }
      }, x => x.stars === 2),"noma");
  });

  it("should NOT return any key matching after the first matching key", () => {
    assert.notEqual(
      findKey({
        "Blue Hill": { stars: 1 },
        "Akaleri":   { stars: 3 },
        "noma":      { stars: 2 },
        "elBulli":   { stars: 3 },
        "Ora":       { stars: 2 },
        "Akelarre":  { stars: 3 }
      }, x => x.stars === 2),"Ora");
  });

  it("should return undefined if no key is found", () => {
    assert.isUndefined(
      findKey({
        "Blue Hill": { stars: 1 },
        "Akaleri":   { stars: 3 },
        "noma":      { stars: 2 },
        "elBulli":   { stars: 3 },
        "Ora":       { stars: 2 },
        "Akelarre":  { stars: 3 }
      }, x => x.stars === 4));
    
  });
  
});
/*
// OLD CUSTOM ASSERTION TEST CASES
const assertEqual = require("../assertEqual");
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2),"noma");
// ----
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 4), undefined);
*/