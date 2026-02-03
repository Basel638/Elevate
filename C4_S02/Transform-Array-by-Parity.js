1/**
2 * @param {number[]} nums
3 * @return {number[]}
4 */
5var transformArray = function(nums) {
6    
7
8    for(let i=0; i<nums.length;i++)
9    {
10        if(nums[i] %2 == 0)
11            nums[i] = 0;
12        else
13            nums[i] = 1;
14
15    }
16
17    nums.sort((a, b) => a - b);
18
19    return nums;
20};