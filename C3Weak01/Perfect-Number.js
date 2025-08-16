/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    
    let sum = 0;

    for(let i = 1; i * i < num; i++)
    {
       if(num % i == 0)
        sum += i, sum += Math.trunc(num / i);

        if(num / i == i)
            sum -= i;
    }

    sum -= num;
    return sum == num;
};



// 28
// 5....
// 1 2 4 7 14 28


// 36 => 6 * 6
// 1 2 3 4 6 9 12 18 36


// 10^16
// 1000000000000000000000000000
// 500000000000000000000000000
// 10 ^ 8
// 100000000


// 100
// 10
// 50