// Delete listed keys from dictionary

// step 3
// implement without delete

'use strict';

const drop = (dictionary, ...keysToRemove) => {
  const filteredDictionary = Object.keys(dictionary)
    .filter(key => !keysToRemove.includes(key))
    .reduce((result, key) => {
      result[key] = dictionary[key];
      return result;
    }, {});

  return filteredDictionary;
};

module.exports = drop;
