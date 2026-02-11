1/**
2 * @param {number} a
3 * @param {number} b
4 * @return {number}
5 */
6var commonFactors = function(a, b) {
7    let count = 0;
8    let minNumber = Math.min(a , b);
9
10    for(let i = 1; i <= minNumber; i++)
11    {
12        if(a % i == 0 && b % i == 0)
13            count++;
14    }
15
16    return count;
17};