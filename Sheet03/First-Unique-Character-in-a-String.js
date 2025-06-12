/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
     let m = new Map();

    for (let i = 0; i < s.length; i++) {
        m.set(s[i],(m.get(s[i]) || 0) + 1);
    }

    for(let i = 0; i < s.length; i++)
    {
        if(m.get(s[i]) == 1)
            return i;
    }

    return -1;
};