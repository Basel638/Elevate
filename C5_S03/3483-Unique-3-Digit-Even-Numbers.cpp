/**
 * @param {number[]} digits
 * @return {number}
 */
var totalNumbers = function(digits) {

     const uniqueNumbers = new Set();
    const n = digits.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                if (i !== j && i !== k && j !== k) {
                    // First digit should not be zero
                    if (digits[i] !== 0) {
                        // Last digit should be even
                        if (digits[k] % 2 === 0) {
                            const number =
                                digits[i] * 100 +
                                digits[j] * 10 +
                                digits[k];

                            uniqueNumbers.add(number);
                        }
                    }
                }
            }
        }
    }
    console.log(uniqueNumbers);
    return uniqueNumbers.size;
};