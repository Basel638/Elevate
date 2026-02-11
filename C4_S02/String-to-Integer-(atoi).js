1/**
2 * @param {string} s
3 * @return {number}
4 */
5var myAtoi = function(s) {
6    s = s.trim();
7
8    if(s.length === 0) return 0;
9
10    let sign = 1;
11    let i =0;
12    if(s[i] === '+')
13        i++;
14
15    else if (s[i] === '-')
16    {
17        i++;
18        sign = -1;
19    }        
20
21    let parsed = 0;
22    while( i < s.length)
23    {   
24        let current = s[i];
25
26        if(current < '0' || current > '9')
27        {
28            break;
29        }
30
31        else
32            parsed = parsed * 10 + Number(current);
33
34            i++;
35    }
36
37    parsed *= sign;
38
39    let INT_MAX = 2 ** 31 -1;
40    let INT_MIN = -(2 ** 31);
41
42
43    if(parsed > INT_MAX)
44        return INT_MAX;
45
46    else if(parsed < INT_MIN)
47        return INT_MIN;
48
49        return parsed;
50};