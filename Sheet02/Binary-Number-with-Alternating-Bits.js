/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    
    let cur = n & 1;
    n >>= 1;
    while(n>0)
    {
        if(cur == (n & 1))
            return false;

        cur = n & 1;
        n >>= 1;            
    }

    return true;
};