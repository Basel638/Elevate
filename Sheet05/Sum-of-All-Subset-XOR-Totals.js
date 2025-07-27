/**
 * @param {number[]} nums
 * @return {number}
 */

 var backtracking = function(i, sum, nums)
 {
    if(i == nums.length)
        return sum;
    
    return backtracking(i + 1, sum ^ nums[i], nums) + backtracking(i + 1, sum, nums);
 }
var subsetXORSum = function(nums) {
    return backtracking(0,0,nums);
};