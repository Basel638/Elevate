1/**
2 * @param {number} n
3 * @return {boolean}
4 */
5
6function solve(n)
7{
8    if(n == 1) return true;
9
10    if(n % 3 || !n) return false;
11
12   return solve(n/3);   
13}
14
15var isPowerOfThree = function(n) {
16    return solve(n);
17};