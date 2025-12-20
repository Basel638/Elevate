1/**
2 * @param {number} n
3 * @param {number} t
4 * @return {number}
5 */
6var smallestNumber = function(n, t) {
7   
8
9   while(true)
10   {
11    let x = n;
12    let productOfDigit = 1;
13    while(x != 0)
14    {
15        productOfDigit*=  x % 10;
16
17        x = Math.trunc(x / 10);
18    }
19
20    if(productOfDigit % t == 0)
21        return n;
22    
23
24        n++;
25   }
26};