/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return \t     -1 if num is higher than the picked number
 *\t\t\t      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let l = 1, r = n;
    
    while (l <= r) {
        let mid = Math.floor((l +r) / 2);
        let num = guess(mid);

        if (num === 0) return mid;
        else if (num === 1) l = mid + 1;
        else r = mid - 1;
    }
    
};