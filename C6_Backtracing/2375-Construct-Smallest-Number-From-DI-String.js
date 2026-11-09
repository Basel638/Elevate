/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function(pattern) {
    let result = "";
    let current = "";
    let used = new Set();

    function backtrack(index) {
        if (current.length === pattern.length + 1) {
            result = current;
            return true;
        }

        for (let digit = 1; digit <= 9; digit++) {
            let charDigit = digit.toString();

            if (used.has(charDigit)) continue;

            if (
                current.length > 0 &&
                (
                    (pattern[index - 1] === 'I' && current[current.length - 1] >= charDigit) ||
                    (pattern[index - 1] === 'D' && current[current.length - 1] <= charDigit)
                )
            ) {
                continue;
            }

            current += charDigit;
            used.add(charDigit);

            if (backtrack(index + 1)) return true;

            used.delete(charDigit);
            current = current.slice(0, -1);
        }

        return false;
    }

    backtrack(0);
    return result;
};