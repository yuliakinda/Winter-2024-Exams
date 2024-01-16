// Sum all number values in dict

// step 1
// identation, spacing, 'use strict', let, const, remove useless blocks

'use strict';

const count = (obj) => {
  let sum = 0;
  const keys = Object.keys(obj);

  keys.forEach((key) => {
    const value = obj[key];
    if (typeof value === 'number') sum += value;
  });

  return sum;
};

module.exports = count;
