/**
 * @param {character[][]} matrix
 * @return {number}
 */
let dp;

var solve = function(i, j, matrix, m, n)
{
    if(i == m || j == n)
        return 0;

    if(dp[i][j] != -1)
        return dp[i][j];

    if(matrix[i][j] == "0")
        return dp[i][j] = 0;

    let right = solve(i, j + 1, matrix, m, n);
    let down = solve(i + 1, j, matrix, m, n);
    let diagonal = solve(i + 1, j + 1, matrix, m, n);

    dp[i][j] = 1 + Math.min(right, down, diagonal);

    return dp[i][j];
};

var maximalSquare = function(matrix) {

    let m = matrix.length;
    let n = matrix[0].length;

    dp = Array.from(
        { length: m },
        () => Array(n).fill(-1)
    );

    let res = 0;

    for(let i = 0; i < m; i++)
    {
        for(let j = 0; j < n; j++)
        {
            res = Math.max(res, solve(i, j, matrix, m, n));
        }
    }

    return res * res;
};