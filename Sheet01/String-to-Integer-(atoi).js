/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    s = s.trim(); // Remove WhiteSpaces

    if (s.length === 0) return 0;

    let i = 0;
    let sign = 1;

    if (s[i] === '+') 
         i++;

    else if (s[i] === '-') {
        i++;
        sign = -1;
    }

    let parsed = 0;

    while (i < s.length) {
        let cur = s[i];

        if (cur < '0' || cur > '9') 
            break;

        else {
            parsed = parsed * 10 + Number(cur);
        }
        i++;
    }

    parsed *= sign;

    const INT_MAX = 2 ** 31 - 1;
    const INT_MIN = -(2 ** 31);

    if (parsed > INT_MAX) 
        return INT_MAX;
    
    else if (parsed < INT_MIN) 
        return INT_MIN;
    
    return parsed;
};
