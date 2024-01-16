// Reverse an array, you can't use .reverse()

// step 2
// declare an empty array, change forEach to for...of, remove useless blocks

'use strict';

const invert = (inputArray) => {
  const reversedArray = [];

  for (const element of inputArray) {
    reversedArray.unshift(element);
  }

  return reversedArray;
};

module.exports = invert;
