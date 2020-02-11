# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @hatem.deux/lotide`

**Require it:**

`const _ = require('@hatem.deux/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:
* `head(array)`: gets the first element of an array
* `tail(array)`: gets the rest of the array after the head (after the 1st element)
* `middle(array)`: gets middle element(s) of an array (1 for odd, 2 for even)
* `countLetters(str)`: counts the characters of a string
* `countOnly(allItems, itemsToCount)`: counts items in an object against predefined list in an another object.  
* `findKeysByValue()`: TBD
* `flatten()`: flattens any multilevel nested arrays
* `letterPositions()`: TBD
* `map()`: TBD
* `takeUntil()`: TBD
* `without()`: TBD 
* `findKey()`: TBD 

<sub>some not completely implemented yet </sub>
