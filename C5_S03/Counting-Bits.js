1/**
2 * @param {number} n
3 * @return {number[]}
4 */
5let list;
6var solve = function(n){
7    if(n == 0)
8        return 0;
9 
10    return 1 + (solve(n & (n - 1)));
11 }
12var countBits = function(n) {
13    list = [];
14    let ans = [];
15    for(let i = 0; i <= n; i++ )
16    {
17        let value = solve(i);
18        ans.push(value);
19    }
20
21    return ans;
22};