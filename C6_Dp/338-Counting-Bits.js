/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const dp = new Array(n + 1).fill(-1);
    dp[0] = 0;

    function solve(n) {
        
        if (dp[n] !== -1) {
            return dp[n];
        }

  
        dp[n] = 1 + solve(n & (n - 1));

        return dp[n];
    }

    const ans = [];

    for (let i = 0; i <= n; i++) {
        ans.push(solve(i));
    }

    return ans;
};