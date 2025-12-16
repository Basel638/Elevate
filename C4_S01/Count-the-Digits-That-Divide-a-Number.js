1/**
2 * @param {number} num
3 * @return {number}
4 */
5var countDigits = function(num) {
6    let count = 0;
7    let x = num; // 121
8    while(num != 0)
9    {
10        // 12
11        let digit = num % 10; // 2
12        if(x % digit == 0) // 121 % 2
13            count++;
14        
15        num = Math.trunc(num / 10); // 1 / 10 => 0.1
16
17    }
18
19    return count;
20};