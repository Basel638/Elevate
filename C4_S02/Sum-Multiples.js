1/**
2 * @param {number} n
3 * @return {number}
4 */
5var sumOfMultiples = function(n) {
6     let sum = 0;
7    for (let i = 1; i <= n; i++) {
8        if (i % 3 == 0 || i % 5 == 0 || i % 7 == 0) {
9            sum += i;
10        }
11    }
12    return sum;
13};