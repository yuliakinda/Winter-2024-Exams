// Return an array without duplicates

// step 1
// 'use strict', let to const, remove useless blocks

'use strict';

const duplicate = (value, N) => {
  if (N <= 0) return [];
  const res = [];
  for (let i = 0; i < N; i++) {
    res[i] = value;
  }
  return res;
};

module.exports = duplicate;
