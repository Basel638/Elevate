/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

=== with => Time O(n), Space O(n) ===
var isAnagram = function(s, t) {
    
    if(s.length != t.length)
        return false;

    let sMap = new Map();
    let tMap = new Map();

    for(let i =0; i<s.length; i++)
    {
        sMap.set(s[i], (sMap.get(s[i]) || 0) +1 );
        tMap.set(t[i], (tMap.get(t[i]) || 0) +1 );
    }

    for(let key of sMap.keys())
    {
        if(sMap.get(key) != tMap.get(key))
            return false;
    }
    return true;
};



=== with => Time O(nlog(n)), Space Constant ===
var isAnagram = function(s, t) {
 
    return s.split('').sort().join('') == t.split('').sort().join('');
};

