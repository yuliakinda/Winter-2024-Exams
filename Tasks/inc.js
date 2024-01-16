// Increment all numbers in dictionary

// step 2
// simplify checking if the value is a number

'use strict';

const incrementNumbers = (dictionary) => {
  for (const key in dictionary) {
    if (typeof dictionary[key] === 'number') {
      dictionary[key] = dictionary[key] + 1;
    }
  }

  return dictionary;
};

module.exports = incrementNumbers;
