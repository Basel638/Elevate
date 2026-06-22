1/**
2 * @param {number} n
3 * @return {boolean}
4 */
5var hasAlternatingBits = function(n) {
6    
7    while(n != 0)
8    {
9        let current = n & 1; // last bit / 1 
10        n >>= 1; // 10
11
12        if( current == (n & 1) )
13            return false;
14    }
15
16    return true;
17};