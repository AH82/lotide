const assert = require("chai").assert
const countOnly = require("../countOnly")

// TEST DATA
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

describe("#countOnly", () => {

  const testResult = countOnly(
    firstNames, 
    { // selection object
      "Jason": true, 
      "Karima": true, 
      "Fang": true, 
      "Agouhanna": false 
    }
  );
  console.log(testResult)

  it("should return an object (type)", () => {
    assert.typeOf(testResult,'object');
  });
  it("should include elements marked true in the selection object", () => {
    assert.property(testResult, "Jason");
    assert.property(testResult, "Jason");
    
  });

  it("assigns 1 to property of elements appearing ONCE && marked true in selection object", () => {
    assert.equal(testResult.Jason, 1) // OR
    assert.propertyVal(testResult, "Jason", 1)
  });
  
  it("assigns 2 to property of elements appearing TWICE && marked true in selection object", () => {
    assert.equal(testResult.Fang, 2) // OR
    assert.propertyVal(testResult, "Fang", 2)
  });
  
  it("should not include elements marked false in selection object", () => {
    assert.isUndefined(testResult.Agouhanna) //OR
    assert.notProperty(testResult, "Agouhanna")
  });
  
  it("should not include elements marked true but does not exist", () => {
    assert.isUndefined(testResult.Karima) // OR
    assert.notProperty(testResult, "Karima")
  });

  it("should not include elements that are NOT in selection object ", () => {
    assert.notProperty(testResult, "Joe")
  });

  it("returns the correct subset result", () => {
    assert.deepEqual(testResult, { 
      "Jason": 1, 
      "Fang": 2
    })
  });

});


/* 
// OLD TEST CUSTOM ASSERTION CODE
const assertEqual = require("../assertEqual")

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Karl"], undefined); 
*/