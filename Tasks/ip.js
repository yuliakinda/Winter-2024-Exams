// Split string by the first occurrence of separator

// step 2
// remove useless else, add spacing

'use strict';

const parseIP = (ipString) => {
  const ipAddressArray = [];

  if (!ipString) return;

  const ipOctets = ipString.split('.');
  if (ipOctets.length != 4) return;

  let index = 0;
  for (const octet of ipOctets) {
    ipAddressArray[index] = parseInt(octet);
    if (isNaN(ipAddressArray[index])) return;
    index++;
  }

  return ipAddressArray;
};

module.exports = parseIP;
