/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
     let res =0;
     const INT_MAX = 2**31-1;
     const INT_MIN = -(2**31);

     while(x !== 0)
     {
        let digit = x % 10;
        x= Math.trunc(x/10);
       

        res = res*10 + digit;
     }

     if(res > INT_MAX || res < INT_MIN)
        return 0;
    
    return res;
        
     
};