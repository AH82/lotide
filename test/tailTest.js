const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("Array [5,6,7] returns [6,7] ", () => {
    assert.deepEqual(tail([5,6,7]), [6,7]);
  });
  it("Array 'Hello', 'Lighthouse', 'Labs']) -> returns ['Lighthouse', 'Labs'] ", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it("Array [5,6,7] does not return [5, 6, 7] ", () => {
    assert.notDeepEqual(tail([5, 6, 7]), [5, 6, 7]);
  });  it("Array [4,5,6,7] does not returns [6,7] ", () => {
    assert.notDeepEqual(tail([4, 5, 6, 7]), [6, 7]);
  });
});





// ------------------------------------------------------
// THE FOLLOWING IS OLD CODE
// THAT SHOULD BE DELETED AS PER "COMPASS" INSTRUCTIONS.
// I'M KEEPING THE CODE FOR LEARNING PURPOSES.
// ------------------------------------------------------


/* const tail = require('../tail');
const assertEqual = require('../assertEqual')

//test cases
// assertEqual(tail([5,6,7]), [6,7]); //returns falsy false
console.log(tail([5,6,4,3,8]));
// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs" */