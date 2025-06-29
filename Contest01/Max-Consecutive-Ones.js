/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    
    let ans = 0, count = 0;

    for(let num of nums)
    {
        if(num == 1)
            count ++;
        else
        {
            ans = Math.max(ans,count);
            count = 0;
        }
    }
    
    ans = Math.max(ans,count);
    return ans;
};