// Increment all numbers in dictionary

// step 3
// implementation without changing incoming args

'use strict';

const incrementNumbers = (dictionary) => {
  const incrementedDictionary = { ...dictionary };

  for (const [key, value] of Object.entries(incrementedDictionary)) {
    if (typeof value === 'number') {
      incrementedDictionary[key] = value + 1;
    }
  }

  return incrementedDictionary;
};

module.exports = incrementNumbers;
