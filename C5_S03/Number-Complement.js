1/**
2 * @param {number} num
3 * @return {number}
4 */
5var findComplement = function(num) {
6    let res = 0;
7    let i = 0;
8    
9    // 010000110
10    //   1000000
11    // 000000001
12
13    while(num)
14    {
15        if ((num & 1) == 0)
16            res |= 1 << i;
17        
18        i += 1;
19        num >>= 1;
20    }
21
22    return res;
23};