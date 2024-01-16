// Extract substring between prefix and suffix

// step 2
// change identifier case, prefer arrow functions, remove senseless else

'use strict';

const getValueBetween = (inputString, prefix, suffix) => {
  const i = inputString.indexOf(prefix);
  if (i === -1) return '';
  
  let k = i + prefix.length;
  inputString = inputString.substring(k);
  
  if (suffix) {
    const i = inputString.indexOf(suffix);
    if (i === -1) return '';
    inputString = inputString.substring(0, i);
  }

  return inputString;
};

module.exports = getValueBetween;
