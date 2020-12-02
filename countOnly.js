
// allItems:      an array of strings that we need to look through
// itemsToCount:  an object specifying what to count

const countOnly = function(allItems, itemsToCount) {

  const results = {};

  for  (const item of allItems) {
    // HELP! : before this IF was added, all assertions has passed. I  DO NOT UNDERSTAND what did this line added.
    // Help provided
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }

  return results;
};

module.exports = countOnly;