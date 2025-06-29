/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let m = new Map();
   
    for(let num of nums)
    {
        m.set(num,true);
    }  
   
    let ans = [];
   
    for(let i = 1; i <= nums.length; i++)
    {
        if(!m.has(i))
            ans.push(i);
    }

    return ans;
      

};




// in-place
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
