/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let m = grid.length, n = grid[0].length;


    for (let i = m - 1; i >= 0 ; i--) {

        for (let j = n - 1; j >= 0; j--) {
            let right = 0, down = 0,flag1 = 0, flag2 = 0;
            if(j + 1 != n)
                right = grid[i][j+1], flag1 = 1;

            if(i + 1 != m)
                down = grid[i+1][j], flag2 = 1;

            if(!flag1)
                grid[i][j] += down;
            else if(!flag2)
                grid[i][j] += right;
            else
                grid[i][j] += Math.min(right, down);
        }
    }
    // console.log(grid);
        return grid[0][0];
};