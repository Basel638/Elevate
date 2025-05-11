var checkIfExist = function(arr) {
    const nums = new Set(arr);
    let count0 = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) 
            count0++;

        else if (nums.has(2 * arr[i])) 
            return true;
    }

    if (count0 > 1)
        return true;

    return false;
};