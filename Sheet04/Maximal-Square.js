/**
 * @param {character[][]} matrix
 * @return {number}
 */
let dp;
 var solve = function(matrix,r,c)
 {
    if(r == matrix.length || c == matrix[0].length)
        return 0;

    if(dp[r][c])
        return dp[r][c];
    
    if(matrix[r][c] == 0)
        return 0;
    dp[r][c] = Math.min(solve(matrix,r,c + 1), solve(matrix,r + 1,c), solve(matrix,r + 1,c + 1) ) + 1;

    return dp[r][c];
 }
var maximalSquare = function(matrix) {
    let r = matrix.length, c = matrix[0].length;
    dp = Array.from({ length: r }, () => Array(c).fill(0));    

    for(let x = 0; x < r; x++)
    {
        for(let y = 0; y < c; y++)
        {
            dp[x][y] = solve(matrix, x, y);
        }
    }
    
    let res = 0;
    for(let x = 0; x < r; x++)
    {
        for(let y = 0; y < c; y++)
        {
            res = Math.max(dp[x][y], res);
        }
    }

    return res * res;

};