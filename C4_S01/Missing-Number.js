1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var missingNumber = function(nums) {
6    
7    
8    let freq = new Array(nums.length + 1).fill(0);
9
10
11    for(let num of nums)
12    {
13        freq[num] = 1;
14    }
15
16
17    for(let i = 0; i < freq.length; i++)
18    {
19        if(freq[i] == 0)
20            return i;
21    }
22
23
24
25};