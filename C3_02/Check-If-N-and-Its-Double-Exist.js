/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    
    let freq = new Array(1e3 + 1).fill(-1);
    
    let count0 = 0;
    for(let num of arr)
    {
        freq[num] = 1;
        if(num == 0)
            count0++;
    }

    if(count0 > 1)
        return true;
    
    else
    {

    

    for(let i = 0; i < arr.length; i++)
    {
        if(freq[arr[i] * 2] == 1 &&  arr[i] != 0)
            return true;
    }
    
    return false;
    }
};