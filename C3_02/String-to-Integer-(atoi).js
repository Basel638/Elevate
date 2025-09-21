/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    s = s.trim();

    if(s.length === 0) return 0;

    let sign = 1;
    let i =0;
    if(s[i] === '+')
        i++;

    else if (s[i] === '-')
    {
        i++;
        sign = -1;
    }        

    let parsed = 0;
    while( i < s.length)
    {   
        let current = s[i];

        if(current < '0' || current > '9')
        {
            break;
        }

        else
            parsed = parsed * 10 + Number(current);

            i++;
    }

    parsed *= sign;

    let INT_MAX = 2 ** 31 -1;
    let INT_MIN = -(2 ** 31);


    if(parsed > INT_MAX)
        return INT_MAX;

    else if(parsed < INT_MIN)
        return INT_MIN;

        return parsed;
};