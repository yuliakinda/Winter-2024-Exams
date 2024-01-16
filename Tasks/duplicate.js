// Return an array without duplicates

// step 2
// simplify condition, use Array.fill for array initialization

'use strict';

const duplicate = (value, N) => {
  if (N <= 0) return [];
  return Array(N).fill(value);
};

module.exports = duplicate;
