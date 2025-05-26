/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function(left, right) {
    let answer = 0;
    for (let bit = 31; bit >= 0; bit--) {
        if ((left & (1 << bit)) !== (right & (1 << bit))) 
            break;
        else 
            answer |= (left & (1 << bit));
    }
    return answer;
};