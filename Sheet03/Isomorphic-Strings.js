/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let m = new Map(), m2 = new Map();

    for(let i = 0; i<s.length; i++)
    {
        if(!m.has(s[i]))
        {
            if(!m2.has(t[i]))
                 m.set(s[i],t[i]), m2.set(t[i],true);
          
            else
                return false;
        }
        else
        {
            if(m.get(s[i]) != t[i])
                return false;
        }
    }

    return true;
};