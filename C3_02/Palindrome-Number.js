/**
 * @param {number} x
 * @return {boolean}
 */

 function isValid(n, result, temp)
 {
    if(!temp) return result == n;

    return isValid(n, result * 10 + (temp % 10), Math.floor(temp/10));
 }
var isPalindrome = function(x) {
     if (x < 0) return false;
    return isValid(x,0,x);
    // let temp = x, result = 0;

    // while (temp !== 0) {
    //     result = result * 10 + (temp % 10);
    //     temp = Math.floor(temp / 10);
    // }

    // return x === result;
};