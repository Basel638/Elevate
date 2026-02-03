1/**
2 * @param {number[]} nums
3 * @return {number[]}
4 */
5var buildArray = function(nums) {
6    let res = new Array(nums.length);
7
8    for(let i =0; i< nums.length;i++)
9    {
10        res[i] = nums[nums[i]];
11    }
12
13    return res;
14};