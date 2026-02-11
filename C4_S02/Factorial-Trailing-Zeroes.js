1/**
2 * @param {number} n
3 * @return {number}
4 */
5var trailingZeroes = function(n) {
6     
7    let count = 0;
8
9    while(n >= 5) // 28
10    {
11        count += Math.trunc(n/5);
12        n = Math.trunc(n/5);
13    }
14
15    return count;
16
17};