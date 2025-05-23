/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    if(num == 0)
        return 0;

    let res = 0;

    while(num > 0)        
    {
        res += 1 + (num & 1);
        num >>= 1;
    }

    return res - 1 ;
};