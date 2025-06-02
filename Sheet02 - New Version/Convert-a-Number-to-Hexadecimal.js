/**
 * @param {number} num
 * @return {string}
 */
  let hex = \0123456789abcdef\;
  
   function reverseString(s, i, ans) {
        if (i === -1) return ans;
        return reverseString(s, i - 1, ans + s[i]);
    }

  function rec(n, ans) {
        if (n === 0) 
            return reverseString(ans, ans.length - 1, \\);
        
        return rec(Math.floor(n / 16), ans + hex[n % 16]);
    }

var toHex = function(num) {
    
     if (num === 0) return \0\;
        let n = num >>> 0;  // zero-fill right shift operator
        return rec(n , \\);

        // console.log(n);
};
