// Find an intersection of two dictionaries

// step 2
// add variable intersection, use arrow function

'use strict';

const findIntersection = (dictionary1, dictionary2) => {
  const keysDictionary1 = Object.keys(dictionary1);

  for (const key of keysDictionary1) {
    if (dictionary1[key] === dictionary2[key]) {
      dictionary2[key] = dictionary1[key];
    } else {
      delete dictionary1[key];
    }
  }

  const intersection = dictionary1;
  return intersection;
};

module.exports = findIntersection;

