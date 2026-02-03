1/**
2 * @param {number} n
3 * @param {number} m
4 * @return {number}
5 */
6var differenceOfSums = function(n, m) {
7    let num1 = 0, num2 = 0;
8
9    for(let i = 1; i <=n; i++)
10    {
11        if(i % m != 0)
12            num1+= i;
13        else
14            num2 +=i;
15    }
16
17    return num1 - num2;
18};