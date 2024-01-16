// Increment all numbers in dictionary

// step 1
// 'use strict', const, remove rest_variables, rename other variables

'use strict';

const incrementNumbers = (dictionary) => {
  for (const key in dictionary) {
    if ((typeof dictionary[key]).charAt(0).toUpperCase() === 'N') {
      dictionary[key] = dictionary[key] + 1;
    }
  }

  return dictionary;
};

module.exports = incrementNumbers;
