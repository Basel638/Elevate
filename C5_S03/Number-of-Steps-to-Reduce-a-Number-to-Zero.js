1/**
2 * @param {number} num
3 * @return {number}
4 */
5var numberOfSteps = function(num) {
6    
7    let res = 0;
8
9    while(num != 0)
10    {
11        if( num % 2 == 0)
12            num >>= 1;
13        else
14            num -= 1;
15
16        res++;
17    }
18
19    return res;
20};