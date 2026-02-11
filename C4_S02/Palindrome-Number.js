1/**
2 * @param {number} x
3 * @return {boolean}
4 */
5
6 function isValid(n, result, temp)
7 {
8    if(!temp) return result == n;
9
10    return isValid(n, result * 10 + (temp % 10), Math.floor(temp/10));
11 }
12var isPalindrome = function(x) {
13     if (x < 0) return false;
14    return isValid(x,0,x);
15    // let temp = x, result = 0;
16
17    // while (temp !== 0) {
18    //     result = result * 10 + (temp % 10);
19    //     temp = Math.floor(temp / 10);
20    // }
21
22    // return x === result;
23};