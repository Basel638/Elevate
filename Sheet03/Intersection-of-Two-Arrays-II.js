/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    
    let m = new Map();
    let res = [];

    for(let num of nums1)
    {
        m.set(num,(m.get(num) || 0) + 1);
    }

    for(let num of nums2)
    {
        if(m.get(num))
        {
            m.set(num, (m.get(num) - 1));
            res.push(num);
        }
    }
    return res;
};