// Return an array without duplicates

// step 3
// intuitive naming

'use strict';

const createArrayWithoutDuplicates = (value, length) => {
  if (length <= 0) return [];
  return Array(length).fill(value);
};

module.exports = createArrayWithoutDuplicates;
