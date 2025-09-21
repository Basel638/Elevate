/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let missChar = 0;
    for (let i = 0; i < s.length; i++) 
        missChar ^= s.charCodeAt(i);
    
    for (let i = 0; i < t.length; i++) 
        missChar ^= t.charCodeAt(i);
    
    return String.fromCharCode(missChar);
};