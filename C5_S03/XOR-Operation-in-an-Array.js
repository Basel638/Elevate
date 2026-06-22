1/**
2 * @param {number} n
3 * @param {number} start
4 * @return {number}
5 */
6var xorOperation = function(n, start) {
7    let result = start;
8    for (let i = 1; i < n; i++) {
9        result ^= start + 2 * i;
10    }
11    return result;
12};