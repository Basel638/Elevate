/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    let s1 = '';

    for(let i =0; i< s.length; i++)
    {
        if((s[i] >= 'a' && s[i] <= 'z') || (s[i] >= 'A' && s[i] <= 'Z') || (s[i] >= '0' && s[i] <= '9')  )
            s1+= s[i].toLowerCase();
    }


    let reversed = '';

    for(let i = s1.length -1; i >= 0; i--)
    {
        reversed += s1[i];
    }

    return reversed == s1;

};