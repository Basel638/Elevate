/**
 * @param {number} turnedOn
 * @return {string[]}
 */

 var countOnes = function(num) {
  let count = 0;
  while (num > 0) {
    count += num & 1; // add the last bit
    num >>= 1;        // shift right
  }
  return count;
};

var readBinaryWatch = function(turnedOn) {
     if (turnedOn < 0 || turnedOn > 10) return [];
     let result = [];

    for (let h = 0; h < 12; h++) {
        for (let m = 0; m < 60; m++) {
            if ((countOnes(h) + countOnes(m)) == turnedOn) {
                result.push(`${h}:${m.toString().padStart(2, '0')}`);
            }
        }
    }

    return result;
};