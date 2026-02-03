1/**
2 * @param {string} s
3 * @return {number}
4 */
5var scoreOfString = function(s) {
6    
7    let score = 0;
8
9    for(let i = 0; i < s.length - 1; i++)
10    {
11       score += Math.abs(s[i].charCodeAt(0) - s[i + 1].charCodeAt(0));
12    }
13
14    return score;
15};