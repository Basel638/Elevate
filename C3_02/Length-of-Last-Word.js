/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

    let i;
    for( i = s.length - 1; s[i] == ' ' ; i--)
    {
    }

    let count = 0;

    for(let x = i; x >= 0; x--)
    {
        if(s[x] == ' ')
            break;
        count++;
    }

    return count;
};