/**
 * @param {number} n
 * @return {string[]}
 */
var validStrings = function(n) {
    if(n == 1)
        return ["0", "1"];
    
    let res = [];

    let k = (1 << n);
    for(let i = 1; i < k; i++)
    {
        let s = "";
        let flag = 1;
        let num = i
        for(let j = 0; j < n; j++)
        {
            let c = num & 1;

            if(c == 1)
                s += '1';
            else
            {
                if(s.length == 0)
                    s += '0';
                else if(s[s.length - 1] == '0')
                {
                    flag = 0; break;
                }
                else
                    s += '0';
            }
            
            num >>= 1;
        } 

        if(flag)
        {
            res.push(s);
        }
    }

    return res;
};