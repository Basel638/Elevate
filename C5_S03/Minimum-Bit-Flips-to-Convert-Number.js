1/**
2 * @param {number} start
3 * @param {number} goal
4 * @return {number}
5 */
6var minBitFlips = function(start, goal) {
7    // XOR to find differing bits between start and goal
8    let xorResult = start ^ goal;
9    let ans = 0;
10    
11    // Count the number of 1's in the XOR result
12    while (xorResult) {
13        ans += xorResult & 1;  
14        xorResult >>= 1;        
15    }
16    
17    return ans;
18};