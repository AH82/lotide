const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");
const eqObjects = require("../eqObjects");


// TEST ASSERTION CODE



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
console.log()
console.log("TEST CASES for RECURSION");

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true,);
assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 3 }), false,);
assertEqual(eqObjects({ a: { z: 1 }, b: 2, c: {m: 5, n: 6 }}, { a: { z: 1 }, b: 2, c: {m: 5, n: 6} }), true,);
assertEqual(eqObjects({ a: { z: 1 }, b: 2, c: {m: {e:11, f: 22, g: 33}, n: [8, 9] }, d: 10}, { a: { z: 1 }, b: 2, c: {m: {e:11, f: 22, g: 33}, n: [8, 9]}, d: 10 }), true,); // => true
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); 
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);