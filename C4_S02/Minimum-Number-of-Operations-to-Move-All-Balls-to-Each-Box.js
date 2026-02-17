1/**
2 * @param {string} boxes
3 * @return {number[]}
4 */
5var minOperations = function(boxes) {
6    
7    let res = new Array(boxes.length);
8
9    for(let i = 0; i < boxes.length; i++)
10    {
11        let sum = 0;
12
13        for(let j = 0; j < boxes.length; j++)
14        {
15            if(boxes[j] == '1')
16                sum += Math.abs(j - i);
17        }
18
19        res[i] = sum;
20    }
21
22    return res;
23};