1/**
2 * @param {number} low
3 * @param {number} high
4 * @return {number}
5 */
6var countOdds = function(low, high) {
7    
8    return Math.ceil((high) / 2) - Math.floor(low / 2);
9
10};
11
12// 7 / 2 => 3.5
13// 8 / 2 => 4
14// low = 3 ??
15