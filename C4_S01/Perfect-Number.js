1/**
2 * @param {number} num
3 * @return {boolean}
4 */
5var checkPerfectNumber = function(num) {
6    
7    let sum = 0;
8
9    for(let i = 1; i < num; i++)
10    {
11        if(num % i == 0)
12            sum +=i;
13    }
14
15
16   return sum == num;
17
18   
19};