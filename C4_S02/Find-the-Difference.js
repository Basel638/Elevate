1/**
2 * @param {string} s
3 * @param {string} t
4 * @return {character}
5 */
6var findTheDifference = function(s, t) {
7    let missChar = 0;
8    for (let i = 0; i < s.length; i++) 
9        missChar ^= s.charCodeAt(i);
10    
11    for (let i = 0; i < t.length; i++) 
12        missChar ^= t.charCodeAt(i);
13    
14    return String.fromCharCode(missChar);
15};