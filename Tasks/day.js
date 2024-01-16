// Get day number


// step 1
// identation, spacing, 'use strict', const, renaming variables

'use strict';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const getDayNumber = (inputString) => {
  let i;
  for (i = 0; i < daysOfWeek.length; i++) {
    if (inputString.startsWith(daysOfWeek[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = getDayNumber;
