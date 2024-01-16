// Delete listed keys from dictionary

// step 2
// remove unneeded parts, replace forEach with for...of

'use strict';

const drop = (dictionary, ...keysToRemove) => {
  const keys = Object.keys(dictionary);

  for (const key of keys) {
    if (keysToRemove.includes(key)) {
      delete dictionary[key];
    }
  }

  return dictionary;
};

module.exports = drop;
