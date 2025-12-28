1/**
2 * @param {number[]} nums1
3 * @param {number[]} nums2
4 * @return {number[]}
5 */
6var intersection = function(nums1, nums2) {
7    
8    let freq1 = new Array(1e3 + 1).fill(0);
9    let freq2 = new Array(1e3 + 1).fill(0);
10
11
12    for(let num of nums1)
13    {
14        freq1[num] = 1;
15    }
16
17    for(let num of nums2)
18    {
19        freq2[num] = 1;
20    }
21
22    // freq1 => 1 2
23    // freq2 => 2
24
25    let res = [];
26
27    for(let i = 0; i < freq2.length; i++)
28    {
29        if(freq1[i] != 0 && freq2[i] != 0)
30            res.push(i);
31    }
32
33
34    return res;
35
36
37};