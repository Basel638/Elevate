/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    
    let freq = new Array(27).fill(0);
    
    for(let char of s)
    { 
        freq[char.charCodeAt(0) - '`'.charCodeAt(0)]++;
    }

    for(let i = 0; i< s.length; i++)
    {
        if(freq[s[i].charCodeAt(0) - '`'.charCodeAt(0)] == 1)
            return i;
    }
    

    return -1;
};