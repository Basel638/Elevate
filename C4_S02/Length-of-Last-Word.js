1/**
2 * @param {string} s
3 * @return {number}
4 */
5var lengthOfLastWord = function(s) {
6
7    let i;
8    for( i = s.length - 1; s[i] == ' ' ; i--)
9    {
10    }
11
12    let count = 0;
13
14    for(let x = i; x >= 0 && s[x] != ' '; x--)
15    {
16        count++;
17    }
18
19    return count;
20};