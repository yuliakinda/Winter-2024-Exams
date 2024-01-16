// Extract substring between prefix and suffix

// step 3
// const where possible (forgot to add to step 2), add variable substring

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

  const substring = inputString;

  return substring;
};

module.exports = getValueBetween;
