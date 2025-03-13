var climbStairs = function(n) {
    list = new Array(46).fill(0);
    list[1] = 1;
    list[2] = 2;

    
    var solve= function(n) {
        if (list[n]) {
            return list[n];
        } 
        else {
            list[n] = solve(n - 1) + solve(n - 2);
            return list[n];
        }
    };

    return solve(n);
};
