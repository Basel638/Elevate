/**
 * @param {number} n
 * @return {number[]}
 */
let dp = [];
var solve = function(n){
    if(n == 0)
        return 0;

    if(dp[n])
        return dp[n];
    
    dp[n] = 1 + (solve(n & (n - 1)));
    return dp[n];
 }
var countBits = function(n) {
   
    let ans = [];
    for(let i = 0; i < n + 1; i++ )
    {
        let value = solve(i);
        ans.push(value);
    }

    return ans;
};
