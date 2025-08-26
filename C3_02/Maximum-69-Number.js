/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    
    let s = num.toString();
    let res = s;
    for(let i = 0; i < s.length; i++)
    {
        if(s[i] == '6')
        {
            res = s.split("");
            res[i] = '9';
            res = res.join("");
            break;
        }
    }

    return Number(res);
};