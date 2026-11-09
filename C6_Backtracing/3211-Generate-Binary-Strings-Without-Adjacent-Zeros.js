/**
 * @param {number} n
 * @return {string[]}
 */
var validStrings = function(n) {
    let res = [];

    function solve(path) {
        if (path.length === n) {
            res.push(path);
            return;
        }

        solve(path + '1');

        if (path.length === 0 || path[path.length - 1] !== '0') {
            solve(path + '0');
        }
    }

    solve("");

    return res;
};