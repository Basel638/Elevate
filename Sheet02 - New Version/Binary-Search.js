/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 function rec(nums,target,l,r)
 {
    if(l > r) return -1;

   let mid = Math.floor((l + r) / 2);
    if(nums[mid] < target) 
        return rec(nums,target,mid+1,r);
    else if(nums[mid] > target)
        return rec(nums,target,l,mid-1);
    else
        return mid;        
 }
var search = function(nums, target) {
    
    return rec(nums,target,0,nums.length-1);


    // let l = 0, r = nums.length -1, mid = 0;

    // while(l <= r)
    // {
    //     mid = Math.floor((l + r) / 2);
    //     if(nums[mid] < target)
    //         l = mid + 1;
    //     else if(nums[mid] > target)
    //         r = mid - 1;
    //     else
    //         return mid;        
    // }
    // return -1;
};