/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {

   let arr = new Array(1e4 + 1).fill(0); 

   
   
    for(let num of nums)
    {
        arr[num]++;
    }


    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] == 0)
            return i;
    }

};