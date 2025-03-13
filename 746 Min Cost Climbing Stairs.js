var minCostClimbingStairs = function(cost) {
    
    list = new Array(cost.length).fill(-1);
    var solve= function(i)
    {
        if(i>=cost.length)
            return 0;
        
        if(list[i]!=-1)
            return list[i];
        
        opt1 = solve(i+1) + cost[i];
        opt2 = solve(i+2) + cost[i];

        return list[i] = Math.min(opt1,opt2);
    }

    return Math.min(solve(0),solve(1));
};