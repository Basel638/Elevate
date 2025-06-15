/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

=== with high ===
var searchInsert = function(nums, target) {
    let l = 0, r = nums.length - 1;
    let ans = nums.length;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (nums[mid] === target) return mid;
        else if (nums[mid] > target) {
            ans = mid;
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    
    return ans;
};




=== with low ===
 
var searchInsert = function(nums, target) {
    let l = 0, r = nums.length - 1;
    let ans = nums.length;
    let flag  = 0;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (nums[mid] === target) return mid;
        else if (nums[mid] > target) {
            r = mid - 1;
        } else {
            l = mid + 1;
            ans = mid;
            flag = 1;
        }
    }
    if(!flag)
        return 0; 
    return ans != nums.length ? ans + 1 : ans;
};
