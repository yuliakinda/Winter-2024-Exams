// Find an intersection of two dictionaries

// step 3
// remove a useless variable, implement without delete

'use strict';

const findIntersection = (dictionary1, dictionary2) => {
  const intersection = {};

  for (const key of Object.keys(dictionary1)) {
    if (dictionary1[key] === dictionary2[key]) {
      intersection[key] = dictionary1[key];
    }
  }

  return intersection;
};

module.exports = findIntersection;
