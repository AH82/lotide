const assert = require("chai").assert;
const findKeyByValue = require("../findKeyByValue");


// TEST DATA
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


describe("#findKeyByValue", () => {

  it("finds the key in an object given the value", () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
    assert.equal(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it("returns undefined if no match", () => {
    assert.isUndefined(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));
  });
  
});


/*

// OLD CUSTOM ASSERTION TEST CODE

const assertEqual = require("../assertEqual");

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// Not adding more assertion due to time constrains
*/