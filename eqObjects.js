const eqArrays = require("./eqArrays");


// ACTUAL FUNCTION
const eqObjects = function(object1, object2) {
  // uncomment the following line to test Recursion happening
  // console.log("object are : \n", object1, "&& \n",object2)
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;

  } else {
    for (let arrKey of Object.keys(object1)) {
      
      if (Array.isArray(object1[arrKey])) {
        if (!eqArrays(object1[arrKey], object2[arrKey])) {
          return false;
        }
      } else if (typeof object1[arrKey] === 'object' && typeof object2[arrKey] === 'object') { 
        if (!eqObjects(object1[arrKey], object2[arrKey])) return false;

      } else if (object1[arrKey] !== object2[arrKey]) {
        return false;

      }
    }
    return true;
  }
};

module.exports = eqObjects;
