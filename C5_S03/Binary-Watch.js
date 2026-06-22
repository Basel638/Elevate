1/**
2 * @param {number} turnedOn
3 * @return {string[]}
4 */
5
6 var countOnes = function(num) {
7  let count = 0;
8  while (num > 0) {
9    count += num & 1; // add the last bit
10    num >>= 1;        // shift right
11  }
12  return count;
13};
14
15var readBinaryWatch = function(turnedOn) {
16     if (turnedOn < 0 || turnedOn > 10) return [];
17     let result = [];
18
19    for (let h = 0; h < 12; h++) {
20        for (let m = 0; m < 60; m++) {
21            if ((countOnes(h) + countOnes(m)) == turnedOn) {
22                result.push(`${h}:${m.toString().padStart(2, '0')}`);
23            }
24        }
25    }
26
27    return result;
28};