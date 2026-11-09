/**
 * @param {number} n
 * @return {number}
 */
// 4
let dp;
 var solve = function(n)
 {
    if(n <= 0)
        return 0;
    if(dp[n] != Infinity && dp[n])
        return dp[n];


    
    for(let i = 1; i * i <= n; i++)
    {
        dp[n] = Math.min(dp[n], 1 + solve( n - (i * i) ));
    }
    return dp[n];
 }
var numSquares = function(n) {
    dp = new Array(n + 1).fill(Infinity);
    solve(n);
    return dp[n];
};