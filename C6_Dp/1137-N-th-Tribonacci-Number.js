/**
 * @param {number} n
 * @return {number}
 */
 let dp;
 var solve = function(n)
 {
    if(n == 1)
        return 1; 
    if(n == 2)
        return 1;
    if(n == 0)
        return 0;
    
    if(dp[n])
        return dp[n];
    
    dp[n] = solve(n-1) + solve(n-2) + solve(n-3);
    return dp[n];
 }
var tribonacci = function(n) {
  dp = new Array(n).fill(0);
  return solve(n);
};