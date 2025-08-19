/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {

    let x = num;
    while(true)
    {
        let sum = 0;
        while(x != 0)
        {
            sum += x % 10;
            x = Math.trunc(x / 10);
        }

        if(sum < 10)
            return sum;

        x = sum;
    }  
};