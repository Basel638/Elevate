/**
 * @param {number} n
 * @return {number}
 */
let dp;
var solve = function(x)
{
        if(dp[x])
            return dp[x];
        
        else{
       dp[x] = solve(x - 1) + solve(x - 2);
       return dp[x];
}
}




var climbStairs = function(n) {
    
 dp = new Array(46).fill(0);
 dp[1] = 1;
 dp[2] = 2;

 return solve(n);
};