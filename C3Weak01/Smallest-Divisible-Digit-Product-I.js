/**
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
var smallestNumber = function(n, t) {
    
    while(true)
    {
        // n
        let x = n;
        let productOfDigit = 1;
        while(x != 0)
        {
            productOfDigit *= x % 10;

            x = Math.trunc(x / 10);
        }

        if(productOfDigit % t == 0)
            return n;
        
        n++;
    }
};