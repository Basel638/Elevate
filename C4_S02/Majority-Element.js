1/**
2 * @param {number[]} nums
3 * @return {number}
4 */


// with frequency array => Time Limit Exceeded
var majorityElement = function(nums) {
   let freq = new Array(1e9 + 1).fill(0);

   for(let num of nums)
   {
    freq[num]++;
   }

   for(let i = 0; i<freq.length; i++)
   {
        if(freq[i] >= Math.trunc(nums.length / 2))
            return i;
   }

};





5var majorityElement = function(nums) {
6    nums.sort((a, b) => a - b); 
7    let count = 1;
8    let maxValue = -1;
9    let element = -1;
10
11    for (let i = 1; i < nums.length; i++) {
12        if (nums[i] !== nums[i - 1]) {
13            if (maxValue < count) {
14                maxValue = count;
15                element = nums[i - 1];
16            }
17            count = 1;
18        } else {
19            count++;
20        }
21    }
22
23    if (maxValue < count) {
24        element = nums[nums.length - 1];
25    }
26
27    return element;
28};
