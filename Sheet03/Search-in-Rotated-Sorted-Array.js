/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l = 0, r = nums.length - 1;
    while(l <= r)
    {
        mid = Math.floor((l + r) / 2);
        if(target == nums[mid])
            return mid;

        // left portion
        if(nums[mid] >= nums[l])
        {
            if(nums[mid] < target || target < nums[l])
                l = mid + 1;
            else
                r = mid - 1;
        }

        // right portion
        else
        {
            if(target < nums[mid] || target > nums[r])
                r = mid - 1;
            else
                l = mid + 1;
        }
    }

    return -1;



};