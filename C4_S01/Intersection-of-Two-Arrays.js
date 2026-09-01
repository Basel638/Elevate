/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    

    let freq = new Array(1001).fill(0);
    let arr = new Array();
    for(let num of nums1 ){
        
        freq[num] = 1 ;
        
    }

    for(let num of nums2 ){
        if(freq[num] == 1){
            freq[num] = 2 ;
        }
    }

    for(let i=0 ; i < freq.length ; i++ ){
        if(freq[i] == 2){
            arr.push(i)
        }

    }

    return arr
};
