/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length;
    let Totalsum = (n * (n + 1)) / 2;
    let currentsum = 0;

    for(let num of nums)
        currentsum+= num;

        
    return Totalsum - currentsum;
};