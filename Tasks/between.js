// Extract substring between prefix and suffix

// step 4
// no changing incoming args, removed dittos, useless variables and if

'use strict';

const getValueBetween = (inputString, prefix, suffix) => {
  const prefixIndex = inputString.indexOf(prefix);
  const startIndex = prefixIndex + prefix.length;

  const suffixIndex = inputString.indexOf(suffix);

  if (prefixIndex === -1 || suffixIndex === -1) return '';

  return inputString.substring(startIndex, suffixIndex);
};

module.exports = getValueBetween;
