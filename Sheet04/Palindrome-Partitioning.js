/**
 * @param {string} s
 * @return {string[][]}
 */

 var isPalindrome = function(s, l, r) {
        while (l < r) {
            if (s[l] !== s[r]) return false;
            l++;
            r--;
        }
        return true;
    }


var partition = function(s) {
     let res = [];
     let part = [];

        var backtracking = function(i) {
            
            if (i >= s.length) {
                res.push([...part]);  // spread syntax
                return;
            }
            
            for (let j = i; j < s.length; j++) {
                if (isPalindrome(s, i, j)) {
                    part.push(s.slice(i, j + 1));
                    backtracking(j + 1);
                    part.pop();
                }
            }
        };

        backtracking(0);
        return res;
};