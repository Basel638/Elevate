
let dp;

var solve = function(i, j, grid, m, n)
{
    if(i == m - 1 && j == n - 1)
        return grid[i][j];

    if(i >= m || j >= n)
        return Infinity;

    if(dp[i][j] != -1)
        return dp[i][j];

    let right = solve(i, j + 1, grid, m, n);
    let down = solve(i + 1, j, grid, m, n);

    dp[i][j] = grid[i][j] + Math.min(right, down);

    return dp[i][j];
};

var minPathSum = function(grid) {

    let m = grid.length;
    let n = grid[0].length;

     dp = Array.from(
        { length: m },
        () => Array(n).fill(-1)
    );

    return solve(0, 0, grid, m, n);
};
