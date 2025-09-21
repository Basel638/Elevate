/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    
    
    let freq = new Array(nums.length + 1).fill(0);


    for(let num of nums)
    {
        freq[num] = 1;
    }


    for(let i = 0; i < freq.length; i++)
    {
        if(freq[i] == 0)
            return i;
    }



};