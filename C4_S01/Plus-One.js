1/**
2 * @param {number[]} digits
3 * @return {number[]}
4 */
5var plusOne = function(digits) {
6    
7    for(let i = digits.length -1; i >= 0; i--)
8    {
9        if(digits[i] < 9)
10        {
11            digits[i] ++;
12            return digits;
13        }
14
15        digits[i] = 0;
16        
17    }
18
19    // push pop       => back
20    // shift unshift  => front
21
22    digits.unshift(1);
23    return digits; // => [0,0,0,0]
24
25};