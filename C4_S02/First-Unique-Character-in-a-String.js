1/**
2 * @param {string} s
3 * @return {number}
4 */
5var firstUniqChar = function(s) {
6    
7    let freq = new Array(27).fill(0);
8
9    for(let char of s)
10    {
11        freq[char.charCodeAt(0) - '`'.charCodeAt(0)]++;
12    }
13
14    for(let i = 0; i < s.length; i++)
15    {
16        if(freq[s[i].charCodeAt(0) - '`'.charCodeAt(0)] == 1)
17            return i;
18    }
19
20    return -1;
21};