1/**
2 * @param {string} s
3 * @param {string} t
4 * @return {boolean}
5 */
6var isAnagram = function(s, t) {
7    
8    if(s.length != t.length)
9        return false;
10
11    let freq = new Array(27).fill(0);
12    
13
14    for(let i =0; i < s.length; i++)
15    {
16        freq[s[i].charCodeAt(0) - '`'.charCodeAt(0)]++;
17    }
18
19    
20
21    for(let i =0; i < t.length; i++)
22    {
23        if(freq[t[i].charCodeAt(0) - '`'.charCodeAt(0)] >=1 )
24            freq[t[i].charCodeAt(0) - '`'.charCodeAt(0)] --;
25        
26        else
27            return false;
28    }
29
30    return true;
31};