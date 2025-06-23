/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
     if(s.length != t.length)
        return false;

    let m = new Map();

    for(let i =0; i<s.length; i++)
    {
        m.set(s[i], (m.get(s[i]) || 0) +1 );
    }

   for(let i =0; i<t.length; i++)
    {
        if(m.get(t[i]) > 0)
             m.set(t[i], (m.get(t[i])) - 1 );
        else
            return false;            
    }
    return true;
};