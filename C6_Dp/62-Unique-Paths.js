/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

let dp;
 var solve = function(i, j, m, n)
{

    if(i == m - 1 && j == n - 1)
        return 1;

    if(i >= m || j >= n)
        return 0;

        if(dp[i][j] != -1)
            return dp[i][j];
            
     dp[i][j] =  solve(i, j + 1, m, n) + solve(i + 1, j, m, n);

    return dp[i][j];
};

var uniquePaths = function(m, n) {
     dp = Array.from(
    { length: m },
    () => Array(n).fill(-1)
);
    return solve(0,0,m,n);    
};