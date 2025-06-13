/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let m = new Map();

    for(let char of magazine)
    {
        m.set(char,(m.get(char) || 0) + 1);
    }

    for(let char of ransomNote)
    {
        if(!m.get(char))
            return false;

        m.set(char, m.get(char) - 1);
    }

    return true;
};