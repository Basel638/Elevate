/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let m = grid[0].length, r = grid.length - 1, c = 0, count = 0;

        while(r >= 0 && c < m)
        {
            if(grid[r][c] < 0)
            {
                r--;
                count += m-c;
            }
            else
                c++;
        }
        return count;
};