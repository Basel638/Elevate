/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    
    let sum = 0;
    let x = num;
    while(true)
    {

        sum = 0;
    while(x != 0)
    {
        let digit = x % 10;


        sum += digit;

        x = Math.trunc(x / 10);
    }

   
    if( sum< 10)
        return sum;

    x = sum;
    }
};