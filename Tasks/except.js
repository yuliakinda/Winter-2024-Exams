// Copy all values from dict except listed

// step 1
// 'use strict', const, remove unneeded code, rename variables

'use strict';

const except = (incomingValuesArray, ...keysToRemove) => {
  const keysToKeep = Object.keys(incomingValuesArray);

  keysToKeep.forEach((key) => {
    if (keysToRemove.includes(key)) {
      delete incomingValuesArray[key];
    }
  });

  return incomingValuesArray;
};

module.exports = except;
