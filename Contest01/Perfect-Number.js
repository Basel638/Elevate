/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    let sum = 0;
    for(let i = 1; i * i <= num; i++)
    {
        if(num % i == 0)
            sum += i, sum += Math.trunc(num / i);
        
        if(num / i == i)
            sum -= i;
    }
    sum -= num;
    return sum == num;
};