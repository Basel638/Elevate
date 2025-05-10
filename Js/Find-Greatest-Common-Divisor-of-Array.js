/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
       nums.sort((a, b) => a - b); 
       
    let maxGCD = -1;
    for (let i = 1; i <= nums[0]; i++) {
        if (nums[nums.length - 1] % i === 0 && nums[0] % i === 0) {
            maxGCD = i;
        }
    }

    return maxGCD;
};