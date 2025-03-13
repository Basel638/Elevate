var fib = function(n) {
    list = new Array(31).fill(0);
    // list[0] = 0;
    list[1] = 1;

    
    var solve= function(n) {
        if (list[n] || n==0) {
            return list[n];
        } 
        else {
            list[n] = solve(n - 1) + solve(n - 2);
            return list[n];
        }
    };

    return solve(n);
};