/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let m = new Map();

    for(let jewel of jewels)
    {
        m.set(jewel,true);
    }

    let count = 0;
    for(let stone of stones)
    {
        if(m.has(stone))
            count++;
    }

    return count;
};