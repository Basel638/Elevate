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