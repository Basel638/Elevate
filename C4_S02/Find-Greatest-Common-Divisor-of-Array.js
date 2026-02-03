1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var findGCD = function(nums) {
6       nums.sort((a, b) => a - b); 
7       
8    let maxGCD = -1;
9    for (let i = 1; i <= nums[0]; i++) {
10        if (nums[nums.length - 1] % i == 0 && nums[0] % i == 0) {
11            maxGCD = i;
12        }
13    }
14
15    return maxGCD;
16};