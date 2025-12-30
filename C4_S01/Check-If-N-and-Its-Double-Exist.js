1/**
2 * @param {number[]} arr
3 * @return {boolean}
4 */
5var checkIfExist = function(arr) {
6    
7    let freq = new Array(1e3 + 1).fill(-1);
8    
9    let count0 = 0;
10    for(let num of arr)
11    {
12        freq[num] = 1;
13        if(num == 0)
14            count0++;
15    }
16
17    if(count0 > 1)
18        return true;
19    
20    else
21    {
22
23    
24
25    for(let i = 0; i < arr.length; i++)
26    {
27        if(freq[arr[i] * 2] == 1 &&  arr[i] != 0)
28            return true;
29    }
30    
31    return false;
32    }
33};