/**
 * @param {number} n
 * @return {string[]}
 */
 
 let ans;
function solve(path, open, close, n) {
        if (path.length === 2 * n) {
            ans.push(path);
            return;
        }

        if (open < n) {
            solve(path + '(', open + 1, close, n);
        }

        if (close < open) {
            solve(path + ')', open, close + 1, n);
        }
    }

var generateParenthesis = function(n) {
    
      ans = [];
      solve(\\,0,0,n);
      return ans;
};

