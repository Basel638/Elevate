1/**
2 * @param {number} n
3 * @return {boolean}
4 */
5var isThree = function(n) {
6
7    let count = 0;
8
9    for(let i = 1; i <= n; i++)
10    {
11        if(n % i == 0)
12            count++;  
13    }
14
15    if(count == 3)
16        return true;
17    
18    return false;
19
20};