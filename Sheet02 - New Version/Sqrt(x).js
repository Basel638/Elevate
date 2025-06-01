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



// recursive 

function myrec(l, r, n, res)
 {
    if (l > r || res == n) return res;
    mid = Math.floor((l + r) / 2);
    
    if(mid**2 <= n){
         res = mid
         return myrec(mid+1,r,n,res) ;
    }
    
    else if (mid ** 2 > n)
        return myrec(l,mid-1,n,res);
       
 }
var mySqrt = function(x) {
    return myrec(0,x,x,0)
};
