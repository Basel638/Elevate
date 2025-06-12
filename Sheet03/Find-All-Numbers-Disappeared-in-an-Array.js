/**
 * @param {number[]} nums
 * @return {number[]}
 */


=== with hash table === extra memory space
var findDisappearedNumbers = function(nums) {
    
    let m = new Map();
    for(let i = 1; i <= nums.length; i++)
        m.set(i,true);


    let ans = [];

    for(let num of nums)
    {
        if(m.has(num))
            m.delete(num);   
    }    

    for(let key of m.keys())
        ans.push(key);


    return ans;
};


=== with the same memory in-place ===
    var findDisappearedNumbers = function(nums) {
    
    let ans = [];

    for(let i = 0; i<nums.length; i++)
    {
        if(nums[Math.abs(nums[i]) - 1] > 0)
            nums[Math.abs(nums[i]) - 1] *= -1;
    }    

    for(let i = 0; i<nums.length; i++)
    {
        if(nums[i] > 0)
            ans.push(i+1);
    }

    return ans;
};
