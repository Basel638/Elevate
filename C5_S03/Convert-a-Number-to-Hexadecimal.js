1/**
2 * @param {number} num
3 * @return {string}
4 */
5  let hex = "0123456789abcdef";
6  
7   function reverseString(s, i, ans) {
8        if (i === -1) return ans;
9        return reverseString(s, i - 1, ans + s[i]);
10    }
11
12  function rec(n, ans) {
13        if (n === 0) 
14            return reverseString(ans, ans.length - 1, "");
15        
16        return rec(Math.floor(n / 16), ans + hex[n % 16]);
17    }
18
19var toHex = function(num) {
20    
21     if (num === 0) return "0";
22        let n = num >>> 0; // two's complement
23        return rec(n , "");
24};