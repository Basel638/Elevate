/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
     
    for (let i = 0; i <= s.length / 2; i++) {
        if (s.length % i === 0) {
            let substring = s.slice(0, i);
            let repeated = "";
            for (let j = 0; j < s.length / i; j++) {
                repeated += substring;
            }
            if (repeated === s) return true;
        }
    }
    return false;
};