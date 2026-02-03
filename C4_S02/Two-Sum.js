1/**
2 * @param {number[]} nums
3 * @param {number} target
4 * @return {number[]}
5 */
6var twoSum = function(nums, target) {
7    
8    for(let i=0 ; i< nums.length; i++)
9    {
10        for(let j = i + 1; j < nums.length; j++)
11        {
12            if(nums[i] + nums[j] == target)
13            {
14                return [i,j];
15            }
16        }
17    }
18};