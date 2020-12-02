
const findKeyByValue = function(objectItem, valueOfItem) {
  for (let item in objectItem) {
    if (objectItem[item] === valueOfItem) {
      return item;
    }
  }
};
  
module.exports = findKeyByValue;