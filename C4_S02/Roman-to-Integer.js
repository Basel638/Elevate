1/**
2 * @param {string} s
3 * @return {number}
4 */
5var romanToInt = function(s) {
6    
7        let d = { 
8            'I': 1, 
9            'V': 5, 
10            'X': 10, 
11            'L': 50, 
12            'C': 100, 
13            'D': 500, 
14            'M': 1000 
15        };
16
17        let sum = 0;
18        let n = s.length;
19        let i = 0;
20
21        while (i < n) {
22          
23            if (i < n - 1 && d[s[i]] < d[s[i + 1]]) {
24                sum += d[s[i + 1]] - d[s[i]];
25                i += 2;
26            } else {
27                
28                sum += d[s[i]];
29                i += 1;
30            }
31        }
32
33        return sum;
34};