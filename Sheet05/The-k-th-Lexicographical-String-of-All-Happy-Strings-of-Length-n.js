/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function(n, k) {
     let happyStrings = [];

    function generateAllHappyString(current) {
        if (current.length === n) {
            happyStrings.push(current);
            return;
        }

        for (let ch of ['a', 'b', 'c']) {
            if (current.length > 0 && current[current.length - 1] === ch) continue;
            generateAllHappyString(current + ch);
        }
    }

    generateAllHappyString("");

    return happyStrings.length < k ? "" : happyStrings[k - 1];
};