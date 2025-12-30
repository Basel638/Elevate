/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
   let freq = new Array(1e9 + 1).fill(0);
    // / / / / 0 0 0... 0

    // new map 
   for(let num of nums)
   {
        freq[num]++;
        if(freq[num] >= 2)
            return true;
   }

    
   return false;
};
