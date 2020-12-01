// ACTUAL FUNCTION
const findKeyByValue = function(objectItem, valueOfItem) {
  for (let item in objectItem) {
    if (objectItem[item] === valueOfItem) {
      // console.log("hey! key found!");
      // console.log(item);
      return item;
    }
    // else {
      //   console.log("item's Key not found or the item doesn's exist");
      // }
    }
  };
  
  module.exports = findKeyByValue;