/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let m = new Map(), res = 0;
    
    // abcabcbb
    let l = 0;
    for(let r = 0; r<s.length; r++)
    {
            while(m.has(s[r]))
            {
                m.delete(s[l]);
                l++;
            }
            m.set(s[r],true);
            res = Math.max(res, r - l + 1)
        
    }
    return res;  
};