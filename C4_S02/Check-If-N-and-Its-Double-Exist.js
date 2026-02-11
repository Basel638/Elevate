1/**
2 * @param {number[]} arr
3 * @return {boolean}
4 */
5var checkIfExist = function(arr) {
6    
7    let freq = new Array(1e3 + 1).fill(0);
8    let count0 = 0;
9    for(let num of arr)
10    {
11        freq[num] = 1;
12        if(num == 0)
13            count0++;
14    }
15
16
17  if(count0 > 1)
18    return true;
19
20else
21{
22    for(let num of arr)
23    {
24        if(freq[num * 2] == 1 && num != 0)
25            return true;
26    }
27
28    return false;
29}
30};