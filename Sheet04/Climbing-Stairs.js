/**
 * @param {number} n
 * @return {number}
 */
let f;
let list;
     
var solve= function(x) {
        if(x == f)
            return 1;
        else if(x > f)
            return 0;
        else
        {
        if (list[x])
        {
            return list[x];
        } 
        else 
        {
            list[x] = solve(x + 1) + solve(x + 2);
            return list[x];
        }
        }
    };

var climbStairs = function(n) {
    f = n;
    list = new Array(46).fill(0);
    return solve(0);
};

