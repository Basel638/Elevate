/**
 * @param {string} s
 * @return {number}
 */
    function getLength(i,s,count)
    {
        if(i < 0 || s[i] == ' ') return count;

        return getLength(i-1, s, count + 1);
    }
    function rec(i,s)
    {
        if(i < 0 || s[i] !== ' ' ) return getLength(i,s,0);
        return rec(i-1,s);
    }

var lengthOfLastWord = function(s) {
    let i = s.length-1;
    return rec(i,s);

    // let i = s.length - 1, count = 0;

    // while (i >= 0 && s[i] === ' ') 
    //     i--;

    // while (i >= 0 && s[i] !== ' ') {
    //     count++;
    //     i--;
    // }

    // return count;

};