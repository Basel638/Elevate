/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
       let res = [[1]];

    for (let i = 0; i < numRows - 1; i++) {
        let temp = [0, ...res[res.length - 1], 0]; // Array Spreading , Spread Operator
        let currentRow = [];
        for (let j = 0; j < res[res.length - 1].length + 1; j++) {
            currentRow.push(temp[j] + temp[j + 1]);
        }
        res.push(currentRow);
    }

    return res;
};