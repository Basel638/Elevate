/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let m = new Map();
    for(let num of nums)
    {
        m.set(num,true);
    }

    let res = 0;
    for(let key of m.keys())
    {
        if(!m.has(key-1))
        {   
            let count=0; 
            while(m.has(key))
                count++,key++;
            res = Math.max(res,count);
        }
    }

    return res;
};