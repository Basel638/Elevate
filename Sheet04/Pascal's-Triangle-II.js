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





var getRow = function(rowIndex) {
      let res = [[1]];
      let finalres = [[1]]; 
    for (let i = 0; i < rowIndex; i++) {
        let temp = [0, ...res[res.length - 1], 0]; // Array Spreading , Spread Operator
        let currentRow = [];
        for (let j = 0; j < res[res.length - 1].length + 1; j++) {
            currentRow.push(temp[j] + temp[j + 1]);
        }
        res.push(currentRow);

        if(i + 1 == rowIndex)
           finalres = [], finalres.push(currentRow);
    }

    let answer = finalres[0];
    return answer;
    
};
