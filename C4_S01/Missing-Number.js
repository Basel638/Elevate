1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var missingNumber = function(nums) {
6    
7    let n = nums.length;
8
9    let TotalSum = (n * (n + 1)) / 2;
10
11    let sum = 0;
12   
13    for(let num of nums)
14    {
15        sum += num;
16    }
17
18    return TotalSum - sum;
19
20};