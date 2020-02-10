/* const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅  Assertion Passed: ${actual} === ${expected}.`);
  } else  console.log(`🛑 🛑 🛑  Assertion Failed: ${actual} !== ${expected}.`);
}; */


const assertEqual = require('./assertEqual');

const head = function(anArray) {
  return anArray[0];
};

module.exports = head;

// TEST CODE - MOVED TO CORRESPONDING FILE IN THE TEST FOLDER 
