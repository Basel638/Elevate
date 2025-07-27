/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    
    let result = [];
    let vis = [];

    var Backtrack = function() {
        if (vis.length === nums.length) {
            result.push([...vis]);
            return;
        }

        for (let x of nums) {
            if (!vis.includes(x)) {
                vis.push(x);
                Backtrack();
                vis.pop(x);
            }
        }
    }

    Backtrack();
    return result;
    
};