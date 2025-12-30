1/**
2 * @param {number} num
3 * @return {number}
4 */
5var maximum69Number  = function(num) {
6    
7    let s = num.toString();
8    let res = s;
9    for(let i = 0; i < s.length; i++)
10    {
11        if(s[i] == '6')
12        {
13            res = s.split("");
14            res[i] = '9';
15            res = res.join("");
16            break;
17        }
18    }
19
20    return Number(res);
21};