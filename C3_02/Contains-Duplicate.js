/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let m = new Map();
    for (let num of nums) {
        if (m.has(num)) 
            return true;
         else 
            m.set(num,true);
        
    }
    return false;
};