/**
 * @param {number} n
 * @return {number}
 */
   var backtracking = function(i, cur, target, str) {
        if (i === str.length && cur === target) {
            return true;
        }

        for (let j = i; j < str.length; j++) {
            let num = parseInt(str.slice(i, j + 1));
            if (backtracking(j + 1, cur + num, target, str)) {
                return true;
            }
        }

        return false;
    }
var punishmentNumber = function(n) {
  

    let res = 0;
    for (let i = 1; i <= n; i++) {
        let squareStr = (i * i).toString();
        if (backtracking(0, 0, i, squareStr)) {
            res += i * i;
        }
    }

    return res;
};