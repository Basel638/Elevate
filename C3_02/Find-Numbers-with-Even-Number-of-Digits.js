/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    
    let evenCount = 0;


    for(let i=0; i<nums.length; i++)
    {
        let digitCount=0;

        while(nums[i]>0){

            nums[i]= Math.trunc(nums[i]/10);
            digitCount++;
        }


        if(digitCount % 2===0)
        evenCount++;

    }

    return evenCount;
};


================================== with string

var findNumbers = function(nums) {
    
    let evenCount=0;


    for(let i=0; i< nums.length; i++)
    {
        if(nums[i].toString().length %2 ==0 )
            evenCount++;
    }

     return evenCount;
};
