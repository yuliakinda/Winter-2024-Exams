// Split string by the first occurrence of separator

// step 3
// remove magic 4, keep for...of

'use strict';

const IP_OCTET_COUNT = 4;

const parseIP = (ipString) => {
  const ipAddressArray = [];

  if (!ipString) return;

  const ipOctets = ipString.split('.');
  if (ipOctets.length !== IP_OCTET_COUNT) return;

  let index = 0;
  for (const octet of ipOctets) {
    const parsedOctet = parseInt(octet);
    if (isNaN(parsedOctet)) return;

    ipAddressArray[index] = parsedOctet;
    index++;
  }

  return ipAddressArray;
};

module.exports = parseIP;
