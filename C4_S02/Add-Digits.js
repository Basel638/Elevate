1/**
2 * @param {number} num
3 * @return {number}
4 */
5var addDigits = function(num) {
6     // 121
7
8        // last digit => number % 10
9        // remove last digit => number / 10
10    
11    while(true){
12
13    let sum = 0;
14
15
16    while(num != 0) 
17    {
18        let digit = num % 10; // 8
19
20        sum += digit;
21        
22        num = Math.trunc(num / 10); 
23    }
24    
25
26    if(sum < 10)
27        return sum;
28    
29    num = sum;
30    }
31};