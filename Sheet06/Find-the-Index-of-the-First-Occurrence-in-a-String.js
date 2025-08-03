/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    
    for(let i = 0; i < haystack.length; i++)
    {
        if(haystack[i] == needle[0] && haystack.length - i + 1 >= needle.length )
        {   let flag = true, x = i;
            for(let j = 0; j < needle.length; j++, x++)
            {
                if(haystack[x] != needle[j])
                {
                    flag = false; break;
                }
            }
            if(flag)
                return i;
        }
    }

    return -1;
};