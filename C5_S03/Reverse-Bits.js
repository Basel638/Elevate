1/**
2 * @param {number} n
3 * @return {number}
4 */
5var reverseBits = function(n) {
6    
7    let res = 0;
8    
9    // 0101000111
10
11
12    // res = 000000000000000
13    //                     100
14    // bit = 1
15
16
17    for(let i = 1; i <= 32; i++)
18    {
19        let bit = n & 1;
20        n >>= 1;
21        res |= (bit << (32 - i));
22    }
23
24    return res;
25};