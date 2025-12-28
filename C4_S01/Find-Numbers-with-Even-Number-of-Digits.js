1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var findNumbers = function(nums) {
6    
7    let evenCount = 0;
8
9
10    for(let i =0 ; i < nums.length; i++)
11    {
12        // 12
13        let digitCount = 0;
14        while(nums[i] != 0)
15        {
16            nums[i] = Math.trunc(nums[i] / 10);
17            digitCount++;
18        }
19
20        if(digitCount % 2 == 0)
21            evenCount++;
22
23    }
24
25    return evenCount;
26};



===============================================================
  var findNumbers = function(nums) {
    
    let evenCount = 0;
    for(let i = 0; i< nums.length; i++)
    {
        if(nums[i].toString().length % 2 == 0)
            evenCount ++;
    }

    return evenCount;
};



















