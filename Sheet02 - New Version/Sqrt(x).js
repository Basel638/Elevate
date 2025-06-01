/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let l = 0, r = x, mid = 0, res;

    while(l <= r)
    {
        mid = Math.floor((l + r) / 2);
        
        if(mid**2 < x)
            l = mid + 1, res = mid;
        else if(mid**2 > x)
            r = mid - 1;
        else
            return mid;        
    }
    return res;
};