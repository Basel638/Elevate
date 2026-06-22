1/**
2 * @param {number} left
3 * @param {number} right
4 * @return {number}
5 */
6
7
8  var isPrime = function(n)
9  {
10    if(n == 1 || n == 0) return false;
11    for(let i = 2; i < n; i++)
12    {
13        if(n % i == 0)
14            return false;
15    }
16
17    return true;
18  }
19  var countBits =function(n){
20        let cnt = 0;
21        while(n){
22            n &= (n-1);
23            cnt++;
24        }
25        return cnt;
26    }
27
28var countPrimeSetBits = function(left, right) {
29  
30    let ans = 0;
31    for(let i = left; i <= right; i++){
32        if(isPrime(countBits(i))) ans++;
33    }
34    return ans;
35};