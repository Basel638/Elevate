/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    
    let freq = new Array(1e3 + 1).fill(-1);
    let count0 = 0;

    for(let i = 0; i < arr.length; i++)
    {
        freq[arr[i]] = 1;
        if(arr[i] == 0)
            count0++;
    }

    if(count0 > 1)
        return true;
    
    else
    {
        
    for(let i = 0; i< arr.length; i++)
    {
        if(arr[i] != 0 && freq[2 * arr[i]] == 1)
            return true;
    }

    return false;

    }

};