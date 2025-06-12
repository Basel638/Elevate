/**
 * @param {number} n
 * @return {boolean}
 */ 

 function SumOfSquare(n)
 {  let sum = 0;
    while(n!==0)
    {
        let digit = n % 10;
        sum += digit**2;
        n = Math.trunc(n/10);
    }
    return sum;
 }

var isHappy = function(n) {
    
    let m = new Map();
    
    while(!m.has(n))
    {   
        m.set(n,true);
        n = SumOfSquare(n);
        if(n == 1)
            return true;
    }

    return false;
};