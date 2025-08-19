/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let x = num;
    let count = 0;
    while(x != 0)
    {
        let digit = x % 10;
        if(num % digit == 0)
            count++;
          x = Math.trunc(x/10);
    }

    return count;
};