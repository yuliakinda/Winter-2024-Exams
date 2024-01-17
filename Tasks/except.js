// Copy all values from dict except listed

// step 3
// no changing incoming args, implementation without delete

'use strict';

const except = (incomingValuesArray, ...keysToRemove) => {
  const filteredValues = {};

  for (const [key, value] of Object.entries(incomingValuesArray)) {
    if (!keysToRemove.includes(key)) {
      filteredValues[key] = value;
    }
  }

  return filteredValues;
};

module.exports = except;
