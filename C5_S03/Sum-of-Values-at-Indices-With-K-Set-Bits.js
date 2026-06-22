1/**
2 * @param {number[]} nums
3 * @param {number} k
4 * @return {number}
5 */
6var sumIndicesWithKSetBits = function(nums, k) {
7     function countSetBits(n) {
8        let count = 0;
9
10        while (n > 0) {
11            count += (n & 1);
12            n >>= 1;
13        }
14
15        return count;
16    }
17
18    let sum = 0;
19
20    for (let i = 0; i < nums.length; i++) {
21        if (countSetBits(i) == k)
22            sum += nums[i];
23    }
24
25    return sum;
26};