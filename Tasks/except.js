// Copy all values from dict except listed

// step 2
// replace forEach with for...of

'use strict';

const except = (incomingValuesArray, ...keysToRemove) => {
  const keysToKeep = Object.keys(incomingValuesArray);

  for (const key of keysToKeep) {
    if (keysToRemove.includes(key)) {
      delete incomingValuesArray[key];
    }
  }

  return incomingValuesArray;
};

module.exports = except;
