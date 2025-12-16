1/**
2 * @param {number} num
3 * @return {number}
4 */
5var addDigits = function(num) {
6    
7    let sum = 0;
8    let x = num;
9    while(true)
10    {
11
12        sum = 0;
13    while(x != 0)
14    {
15        let digit = x % 10;
16
17
18        sum += digit;
19
20        x = Math.trunc(x / 10);
21    }
22
23   
24    if( sum< 10)
25        return sum;
26
27    x = sum;
28    }
29};