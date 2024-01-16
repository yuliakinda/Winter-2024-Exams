// Get day number


// step 2
// use for...of loop

'use strict';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const getDayNumber = (inputString) => {
  for (const [index, day] of daysOfWeek.entries()) {
    if (inputString.startsWith(day.toLowerCase())) {
      return index + 1;
    }
  }
  return -1;
};

module.exports = getDayNumber;

