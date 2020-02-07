// TEST/ASSERTION FUNCTIONS

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}.`);
  } else  console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}.`);
};
// ACTUAL FUNCTION
const findKeyByValue = function(objectItem, valueOfItem){
  for(let item in objectItem){
    if (objectItem[item] === valueOfItem){
      // console.log("hey! key found!");
      // console.log(item); 
      return item;
    } 
    // else {
    //   console.log("item's Key not found or the item doesn's exist");
    // }
  }
};
// TEST ASSERTION CODE
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// Not adding more assertion due to time constrains 