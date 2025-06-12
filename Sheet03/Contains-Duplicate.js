/**
 * @param {number[]} nums
 * @return {boolean}
 */
=== with Set ===
var containsDuplicate = function(nums) {
    let s = new Set();
    for (let num of nums) {
        if (s.has(num)) 
            return true;
         else 
            s.add(num);
        
    }
    return false;
};



=== with Map ===
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
