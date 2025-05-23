/**
 * @param {number} n
 * @return {boolean}
 */

var isPowerOfTwo = function(n) {
    
    let res = 1;

    while (res < n)
        res *= 2;

    return res == n;            
};



=== Optimized ===
var isPowerOfTwo = function(n) {
    return n > 0 && ! (n & (n-1));        
};
