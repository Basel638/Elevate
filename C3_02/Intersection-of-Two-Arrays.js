/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    
       let freq1 = new Array(1e3 + 1).fill(0); 
       let freq2 = new Array(1e3 + 1).fill(0); 

       for(let num of nums1)
       {
        freq1[num]++;
       }

        for(let num of nums2)
       {
        freq2[num]++;
       }

        let res = [];
        for(let i = 0; i< freq1.length; i++)
        {
            if(freq1[i] > 0 && freq2[i] > 0)
                res.push(i);
        }

        return res;
};