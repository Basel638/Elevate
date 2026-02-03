1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var numIdenticalPairs = function(nums) {
6    
7    let pairCount = 0;
8
9    for(let i = 0; i < nums.length - 1; i++)
10    {
11        for(let j = i + 1; j < nums.length; j++)
12        {
13            if(nums[i] == nums[j])
14                pairCount++;
15        }
16    }
17
18    return pairCount;
19};