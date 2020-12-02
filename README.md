# Lotide

A mini-clone of the [Lodash](https://lodash.com) library.

<br/>

## Author :
*Hatem* :  [Github: @AH82](https://github.com/AH82) | 
[npm: @hatem.deux](https://www.npmjs.com/~hatem.deux)

<br/>

## Author's Notes :

![Lighthouse Labs](https://www.lighthouselabs.ca/assets/lighthouselabs-logo-d5df6d383f7466b06a64de9561fd537493502eafe78bbf3bcd3de82884e5dd85.png)
* This project is a part of a learning experience as a student at [Lighthouse Labs](https://www.lighthouselabs.ca)'s Full-Stack Web-Developper Bootcamp course.
* This is my very first project.
* Main focus:
  * Data manipulation (*arrays* and *objects*)
  * Callbacks
  * Recursion
  * export / import *(`require`)*
  * TDD / BDD with *Mocha* & *Chai*
* Most commented-out code is kept ***intentionally*** for learning, improvement & future awareness purposes.
 * These are especially at the bottom of Test files.
* This project was revisited post-bootcamp and implemented additional excercises, did major clean up and fixed a couple of bugs.

<br/>

## Table of contents
* [Setup](##Setup)
  * [Install via npm](###Install-via-npm)
  * [Clone it from GitHub](###Clone-it-from-GitHub)
* [Dependencies](##Dependencies)
  * [DevDependencies](####DevDependencies)
* [Documentation](##Documentation)
  * [Main Functions](###Main-Functions)
  * [Comparison functions](###Comparison-functions)
  * [Custom Assertion functions](###Custom-Assertion-functions)
  * [Testing](###Testing)
    * [Running Test](####Running-Test)
* [Change History](##Change-History )
  * [v1.0.1](###v1.0.1)
    * [Improvements](####Improvements)
    * [Bug fixes](####Bug-fixes)
  * [v1.0.0](###v1.0.0)


## Setup
<sup>[back to top](##Table-of-contents)</sup>
  > **_CAUTION:_** <br/>
  > **This library is published as a part of a learning process. It is _not_ meant for use in serious projects.**

### Install via [npm](https://www.npmjs.com/package/@hatem.deux/lotide): 
In your Terminal:
```s
> npm install @hatem.deux/lotide
```
At the top of your JavaScript code:
```js
const _ = require('@hatem.deux/lotide');
```
Call it (example):
```js
const results = _.tail([1, 2, 3]) // => [2, 3]
```
### Clone it from [GitHub](https://github.com/AH82/lotide)
in your terminal:
```s
> git clone git@github.com:AH82/lotide.git
```
## Dependencies
<sup>[back to top](##Table-of-contents)</sup>

Install Dependencies in the terminal:
```s
> npm install
```
#### DevDependencies
* [Mocha Test Suite](https://mochajs.org/)
* [Chai assertion library](https://www.chaijs.com/api/assert)
```s
> npm install --save-dev mocha chai
```

## Documentation
<sup>[back to top](##Table-of-contents)</sup>

### Main Functions
* All functions are in files of `"./<function name>.js"`
* [`index.js`](./index.js) exports all these functions.

<br/>

| Function name        | parameter                       | Description |
| -------------------- | :-----------------------------: | ----------- |
| [`head`](./head.js)               | array                           | returns the value of the first (head) *element* in an array.
| [`tail`](./tail.js)               | array                           | returns an *array* of remaining element in an array.
| [`middle`](./middle.js)             | array                           | returns an *array* of middle element(s) in an array (1 for odd, 2 for even).
| [`without`](./without.js)            | SourceArray, itemsToRemoveArray | returns a filtered-out *new* array.
| [`flatten`](./flatten.js)            | array                           | returns a flattened array from a multi-level nested one in the same element-order (i.e. removes nesting)
| [`countOnly`](./countOnly.js)          | array, itemsToCountObject       | returns an object containing counts of everything the input object listed.
| [`countLetters`](./countLetters.js)       | string                          | returns an object a count of each of the letters in that sentence. ignores whitespaces.
| [`letterPositions`](./letterPositions.js)    | string                          | returns an object with all the indices (zero-based positions) in the string where each character is found. (property-value is an array)
| [`findKeyByValue`](./findKeyByValue.js)     | object, value                   | scans the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
| [`map`](./map.js)                | array, callback                 | returns an array modified by the callback.
| [`takeUntil`](./takeUntil.js)          | array, callback                 | returns a slice of the array with elements taken from the beginning until callback returns a truthy value.
| [`findKey`](./findKey.js)            | object, callback                | returns the first key for which the callback returns a truthy value. If not  found, returns *undefined*.
|

<br/><br/>

### Comparison functions
These functions are not included in [`index.js`](./index.js).

| Function name        | parameter                       | Description |
| -------------------- | :-----------------------------: | ----------- |
| [`eqArrays`](./eqArrays.js)           | array1, array2                  | deep-compares arrays. returns `true` if identical. `false` if not.
| [`eqObjects`](./eqObjects.js)          | object1, object2                | deep-compares objects. returns `true` if identical. `false` if not.
---
<br/><br/>

### Custom Assertion functions
These functions are not included in [`index.js`](./index.js).

> *These functions were used during development and are no longer required by other functions. They are kept for archiving and the learning experience.*

These are *side-effects* function *do not* return, they produce `console.logs` indicating success or failure of Assertion.
They typically use the Comparison functions as inputs to assert.
| Function name        | parameter                       | Description |
| -------------------- | :-----------------------------: | ----------- |
| [`assertEqual`](./assertEqual.js)        | bool                            | for regular values 
| [`assertArraysEqual`](./assertArraysEqual.js)  | bool                            | for arrays
| [`assertEqualObjects`](./assertEqualObjects.js) | bool                            | for objects
|

<br/>

### Testing
Using Mocha/Chai
* All test files are under [`"./test/"`](./test/)
  * except "Custom Assertion functions" intentionally placed under [`"./test/customAssertTests"`]([./test/customAssertTests) to be ignored by test run.
* All Test files are named by the convention `"./test/<function name>Test.js"`
#### Running Test
* At project root folder in the terminal
```
> mocha
```
or 
```
> npm test
```

<br/><br/>

## Change History
<sup>[back to top](##Table-of-contents)</sup>


<br/>

### v1.0.1
---
  #### **Improvements**
  * [`eqArrays`](./eqArrays.js) & [`eqObjects`](./eqObjects.js) now support deep comparison (through recursion)
  * `README.md` redesigned.
  * lints, cleans and removes redundant, dead or commented-out code across entire project, except when intentional.
  * **Testing**
    * The entire code is now covered by tests.
    * Any in-file custom tests (console.log or custom assertions) moved to the `"./test/*"` folders.
    * Any remaining custom tests are converted to Mocha/Chai code.
      * except: custom Assertions due to side-effect nature (but rapped in *Mocha*'s *describe/it* )



  #### **Bug fixes**
  * [`takeUntil.js`](./takeUntil.js)
    * **Issue**: returns undefined if the callback argument does not match an element. (i.e. does not find a truthy element).
    * **Fix**: returns the entire array if no match.
  * [`without.js`](./without.js)
    * **Issue**: Does not return a new array. (i.e. modifies the original).
    * **Fix**: returns a new array.
  * [`index.js`](./index.js)
    * fixes typo: ~~`findKeysByValue`~~ => `findKeyByValue`
  * [`package.json`](./package.json)
    * **Issue**: `"main"` refered to the incorrect file => `{ ..., "main": "assertArraysEqual.js", ... }`
    * **Fix**: `"main"` now referes to the correct file => `{ ..., "main": "index.js", ... }`
  * functions `findKeysByValue`, `letterPositions`, `map`, `takeUntil`, `without`, `findKey` are now implemented. (on npm package only)

<br/>

### v1.0.0
---
* Initial release.

<br/><br/><br/><br/><br/>
---

<sup>[back to top](##Table-of-contents)</sup>

### Meet Larry The Duck - Lighthouse labs mascot
![Larry the Duck](https://www.lighthouselabs.ca/assets/rubberduckdebugging-aeee9fd4a7fb079c0341fe21c32ef66c0980f9a9d0e4a3830446673e6068ad8d.gif)