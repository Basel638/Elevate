/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums.sort((a, b) => a - b); 
    let count = 1;
    let maxValue = -1;
    let element = -1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            if (maxValue < count) {
                maxValue = count;
                element = nums[i - 1];
            }
            count = 1;
        } else {
            count++;
        }
    }

    if (maxValue < count) {
        element = nums[nums.length - 1];
    }

    return element;
};