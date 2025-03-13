var rob = function(nums) {
    
    list = new Array(101).fill(-1);
    list[0]=nums[0];
    list[1] = Math.max(nums[0],nums[1]);
    n = nums.length;
    var solve = function(i)
    {
        if(list[i] != -1)
        return list[i];

        list[i] = Math.max(solve(i-1),solve(i-2)+nums[i]);
        return list[i];
    }

    return solve(n-1);
};