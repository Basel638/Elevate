/**
 * @param {string} expression
 * @return {number[]}
 */
 let operations;
var backtracking = function(left, right, expression)
{
    let res = [];

        for (let i = left; i <= right; i++) {
            let op = expression[i];
            if (operations[op]) {
                let nums1 = backtracking(left, i - 1, expression);
                let nums2 = backtracking(i + 1, right, expression);

                for (let n1 of nums1) {
                    for (let n2 of nums2) {
                        res.push(operations[op](n1, n2));
                    }
                }
            }
        }

        if (res.length === 0) {
            res.push(parseInt(expression.slice(left, right + 1)));
        }

        return res;
}

var diffWaysToCompute = function(expression) {
      operations = {
            '+': (a, b) => a + b,
            '-': (a, b) => a - b,
            '*': (a, b) => a * b,
        };

        return backtracking(0, expression.length - 1, expression);
    };