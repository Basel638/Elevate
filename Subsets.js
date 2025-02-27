var subsets = function(nums) {

   let res = [];
        let subset = [];
        
        var solve= function(i) {
            if (i >= nums.length) {
                res.push([...subset]);
                return;
            }
            
            subset.push(nums[i]);
            solve(i + 1);
            
            subset.pop();
            solve(i + 1);
        }
        
        solve(0);
        return res;  
};