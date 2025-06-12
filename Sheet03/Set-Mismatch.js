/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let ans = [0, 0];
    let m = new Map();

    for (const num of nums) {
        m.set(num, (m.get(num) || 0) + 1);
    }

    for (let i = 1; i <= nums.length; i++) {
        if (!m.has(i)) 
            ans[1] = i;
    
        if (m.get(i) === 2) 
            ans[0] = i;
        
    }

    return ans;
};