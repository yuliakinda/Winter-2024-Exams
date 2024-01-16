// Find an intersection of two dictionaries

// step 1
// 'use strict', remove empty blocks, const, rename variables

'use strict';

const findIntersection = function intersection(dictionary1, dictionary2) {
  const keysDictionary1 = Object.keys(dictionary1);

  for (const key of keysDictionary1) {
    if (dictionary1[key] === dictionary2[key]) {
      dictionary2[key] = dictionary1[key];
    } else {
      delete dictionary1[key];
    }
  }

  return dictionary1;
};

module.exports = findIntersection;

