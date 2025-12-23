1/**
2 * @param {number} x
3 * @return {number}
4 */
5var reverse = function(x) {
6    
7    let res = 0;
8    let INT_MAX = 2**31-1;
9    let INT_MIN = -(2**31);   
10    
11    // 1
12    while(x != 0)
13    {
14        let digit = x % 10; // 2
15
16        x = Math.trunc(x / 10);
17
18        res = res * 10 + digit; // 321
19    }
20    
21
22
23    if(res > INT_MAX || res < INT_MIN)
24        return 0;
25
26    return res;
27
28};