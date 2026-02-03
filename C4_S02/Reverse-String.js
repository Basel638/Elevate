1/**
2 * @param {character[]} s
3 * @return {void} Do not return anything, modify s in-place instead.
4 */
5var reverseString = function(s) {
6     let temp;
7    for (let i = 0; i < Math.trunc(s.length / 2); i++) {
8        temp = s[i];
9        s[i] = s[s.length - 1 - i];
10        s[s.length - 1 - i] = temp;
11    }
12};