1/**
2 * @param {number[]} digits
3 * @return {number[]}
4 */
5var plusOne = function(digits) {
6    
7   // [3, 4, 7, 9]
8
9   // [9 , 9, 9, 9]
10    for(let i = digits.length - 1; i >= 0; i--)
11    {
12        if(digits[i] < 9)
13        {
14            digits[i]++;
15            return digits;
16        }
17
18        digits[i] = 0;
19    }
20
21    // push    pop   (back)
22    // unshift shift (front)
23
24    digits.unshift(1);
25    return digits;
26    // [0, 0, 0, 0]
27
28
29};