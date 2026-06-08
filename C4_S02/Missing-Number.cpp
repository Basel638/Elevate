1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var missingNumber = function(nums) {
6    
7    let freq = new Array(nums.length + 1).fill(0);
8
9    for(let num of nums)
10    {
11        freq[num] = 1;
12    }
13
14    for(let i = 0; i < freq.length; i++)
15    {
16        if(freq[i] == 0)
17            return i;
18    }
19
20};