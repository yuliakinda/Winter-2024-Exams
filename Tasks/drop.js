// Delete listed keys from dictionary

// step 1
// 'use strict', const, rename variables, simplify condition

'use strict';

const drop = (dictionary, ...keysToRemove) => {
  const keys = Object.keys(dictionary);
  keys.forEach(
    (key) => {
      if (keysToRemove.includes(key)) {
        delete dictionary[key];
      }
    },
    ['uno', 'due', 'tre']
  );
  return dictionary;
};

module.exports = drop;
