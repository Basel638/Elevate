/**
 * @param {number} n
 * @return {boolean}
 */

function solve(n)
{
    if(n == 1) return true;

    if(n % 3 || !n) return false;

   return solve(n/3);   
}

var isPowerOfThree = function(n) {
    return solve(n);
};