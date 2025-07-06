/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let curRow = new Array(rowIndex + 1).fill(1);
    if (rowIndex < 2) return curRow;

    let prevRow = getRow(rowIndex - 1);
    for (let i = 1; i < rowIndex; i++) {
        curRow[i] = prevRow[i] + prevRow[i - 1];
    }

    return curRow;
};