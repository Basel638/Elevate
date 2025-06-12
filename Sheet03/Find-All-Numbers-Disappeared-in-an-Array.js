/**
 * @param {number[]} nums
 * @return {number[]}
 */
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