
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  // let count =0
  for  (const item of allItems) {
    // console.log(item);
    // count++;
    // console.log(count);
    //---------------
    // inside the loop,
    // increment the counter for each item:
    //   set a property with that string key to:
    //     the value that was already there (or zero if nothing there) with 1 added to it.
    if (itemsToCount[item]) { // HELP! : before this IF was added, all assertions has passed. I  DO NOT UNDERSTAND what did this line added.//Help provided//
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  // console.log("final count: ", count);
  return results;
};

  module.exports = countOnly;