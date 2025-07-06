/**
 * @param {number} n
 * @return {number}
 */

== Bottom -> Up ==

     
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




====================================================================================
   == Top -> Down ==
     
 let list;
var solve= function(n) {
        if (list[n]) {
            return list[n];
        } 
        else {
            list[n] = solve(n - 1) + solve(n - 2);
            return list[n];
        }
    };


var climbStairs = function(n) {
   list = new Array(46).fill(0);
    list[1] = 1;
    list[2] = 2;

    
    
    return solve(n);
};

