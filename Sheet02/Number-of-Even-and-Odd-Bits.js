/**
 * @param {number} n
 * @return {number[]}
 */
var evenOddBit = function(n) {
    
    let evenCount = 0, oddCount = 0, flag = 2;

    while(n > 0)
    {
        if(flag % 2)
            oddCount += (n & 1);

        else
            evenCount += (n & 1); 

        flag++;
        n >>= 1;
    }

    let res = [];
    res[0] = evenCount;
    res[1] = oddCount;

    return res;
};