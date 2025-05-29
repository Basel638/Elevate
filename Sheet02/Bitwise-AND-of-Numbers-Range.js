/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function(left, right) {
let answer = 0;

for(let bit = 31; bit >=0; bit--)
{
    if((left & (1<<bit)) !== (right & (1<<bit)) )   
        break;
        
    else
      answer |= (left & (1<<bit));     
}
    return answer;
};

// 10000000000000
// 101010000010101    340
// 10101000010101

// 101010001110111    500


// 181
// 189


