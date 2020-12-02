const assert = require("chai").assert;
const eqObjects = require("../eqObjects");


describe('#eqObjects', () => {
  
  // TEST DATA 1
  const ab = { a: "1", b: "2" };
  const ab3 = { a: "1", b: "3" };
  const ba = { b: "2", a: "1" };
  const abc = { a: "1", b: "2", c: "3" };
  
  it(`returns true when objects are identical`, () => {
    assert.deepEqual(ab, ba);
    assert.isTrue(eqObjects(ab, ba));
  });
  
  it("returns false when numbers of keys are not equal", () => {
    assert.notDeepEqual(ab, abc);
    assert.isFalse(eqObjects(ab, abc));
  });
  
  it("returns false when identical keys has different values", () => {
    assert.notDeepEqual(ab, ab3);
    assert.isFalse(eqObjects(ab, ab3));
  });
  
  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  const cd2 = { c: "1", d: ["2", 3, 4] };
  
  it(`returns true on equal objects with equal nested arrays`, () => {
    assert.deepEqual(cd,dc);
    assert.isTrue(eqObjects(cd, cd));
  });
  
  it(`returns false on objects with different nested arrays to equal keys, and equal other props`, () => {
    assert.notDeepEqual(cd, cd2);
    assert.isFalse(eqObjects(cd, cd2));
  });
  
  describe("deep comparison (recursion)", () => {
    
    // TEST DATA 2
    const ax1b2 = { a: { x: 1 }, b: 2 };
    const ax2b2 = { a: { x: 2 }, b: 2 };
    const ay1b2 = { a: { y: 1 }, b: 2 };
    const ax7y1b2 = { a: { x:7, y: 1 }, b: 2 };
    
    const ax_A34_b2 = { a: { x: [ 3, 4 ] }, b: 2 };
    const ax_A35_b2 = { a: { x: [ 3, 5 ] }, b: 2 };
    
    describe("should return TRUE when", () => {
      
      it("equal nested objects", () => {
        assert.deepEqual(ax1b2, { a: { x: 1 }, b: 2 });
        assert.isTrue(eqObjects(ax1b2, { a: { x: 1 }, b: 2 }));
      });
      
      it("equal nested objects containing equal arrays values", () => {
        assert.deepEqual(ax_A34_b2, { a: { x: [ 3, 4 ] }, b: 2 });
        assert.isTrue(eqObjects(ax_A34_b2, { a: { x: [ 3, 4 ] }, b: 2 }));
      });
      
    });
    
    describe("should return FALSE when", () => {
      
      it("nested identical keys have different values", () => {
        assert.notDeepEqual(ax1b2, ax2b2);
        assert.isFalse(eqObjects(ax1b2, ax2b2));
      });
      
      it("nested object keys are NOT equal", () => {
        assert.notDeepEqual(ax1b2, ay1b2);
        assert.isFalse(eqObjects(ax1b2, ay1b2));
      });
      
      it("nested object number of keys are NOT equal", () => {
        assert.notDeepEqual(ax7y1b2, ay1b2);
        assert.isFalse(eqObjects(ax7y1b2, ay1b2));
      });
      
      it("equal nested objects containing NOT equal arrays values", () => {
        assert.notDeepEqual(ax1b2, ax_A34_b2);
        assert.isFalse(eqObjects(ax1b2, ax_A34_b2));
      });
      
      it("nested object vs. flat object value", () => {
        assert.notDeepEqual(ax_A34_b2, ax_A35_b2);
        assert.isFalse(eqObjects(ax_A34_b2, ax_A35_b2));
      });
      
    });
    describe("All Combinations", () => {
      it("returns true of muti-nested and multi type object", () => {
        assert.deepEqual(
          { a: { z: 1 }, b: 2, c: { m: { e:11, f: 22, g: 33}, n: [8, 9] }, d: 10 },
          { a: { z: 1 }, b: 2, c: { m: { e:11, f: 22, g: 33}, n: [8, 9] }, d: 10 }
        );
        assert.isTrue(
          eqObjects(
            { a: { z: 1 }, b: 2, c: { m: {e:11, f: 22, g: 33}, n: [8, 9] }, d: 10 },
            { a: { z: 1 }, b: 2, c: { m: {e:11, f: 22, g: 33}, n: [8, 9] }, d: 10 }
          )
        );
      });
    });
          
          
  });
        
        
});
      
/*
// TEST ASSERTION CODE
const eqArrays = require("../eqArrays");
const assertEqual = require("../assertEqual");
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);


// TEST ASSERTION CODE -- PART-2
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqArrays(cd.d,dc.d), true);

const cd2 = { c: "1", d: ["2", 3, 4] };

assertEqual(eqObjects(cd, cd2), false);
assertEqual(eqArrays(cd.d, cd2.d), false);

// TEST CASES for RECURSION
assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true,);
assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 3 }), false,);
assertEqual(eqObjects({ a: { z: 1 }, b: 2, c: {m: 5, n: 6 }}, { a: { z: 1 }, b: 2, c: {m: 5, n: 6} }), true,);
assertEqual(eqObjects({ a: { z: 1 }, b: 2, c: {m: {e:11, f: 22, g: 33}, n: [8, 9] }, d: 10}, { a: { z: 1 }, b: 2, c: {m: {e:11, f: 22, g: 33}, n: [8, 9]}, d: 10 }), true,); // => true
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);

*/