
const tail = function(anArray) {

  let tailArray = [];

  for (let i = 1; i < anArray.length; i++) {
    tailArray.push(anArray[i]);
  }
  
  return tailArray;
};

module.exports = tail;