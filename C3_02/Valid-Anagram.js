/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
     
     if(s.length != t.length)
        return false;
     let freq = new Array(27).fill(0);


    for(let i =0; i<s.length; i++)
    {
        freq[s[i].charCodeAt(0) - 'a'.charCodeAt(0)] ++;
    }

   for(let i =0; i<t.length; i++)
    {
        if(freq[t[i].charCodeAt(0) - 'a'.charCodeAt(0)] >=1 )
            freq[t[i].charCodeAt(0) - 'a'.charCodeAt(0)]--;
        else
            return false;
    }
    return true;
};