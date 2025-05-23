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