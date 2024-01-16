// Extract substring between prefix and suffix

// step 1
// identation, spacing, 'use strict', renaming variables

'use strict';

let getValueBetween = (inputString, prefix, suffix) => {
  let i = inputString.indexOf(prefix);
  if (i === -1) return '';
  else {
    let k = i + prefix.length;
    inputString = inputString.substring(k);
    if (suffix) {
      i = inputString.indexOf(suffix);
      if (i === -1) {
        return '';
      } else {
        inputString = inputString.substring(0, i);
      }
    }
  }
  return inputString;
};

module.exports = getValueBetween;
