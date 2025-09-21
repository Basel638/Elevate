/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    
    if(n == 2)
        return 1;
    
    if(n == 3)
        return 2;

    let x = Math.trunc(n / 3);
    let r = n % 3;

    if(r == 0)
        return Math.pow(3,x);
    else if(r == 1)
        return Math.pow(3,x-1) * 4;
    else
        return Math.pow(3,x) * r;
        

};