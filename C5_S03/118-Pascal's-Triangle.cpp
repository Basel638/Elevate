/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
     const result = [];

    for (let i = 0; i < numRows; i++) {
        // إنشاء صف طوله i+1 وكل عناصره = 1
        const row = new Array(i + 1).fill(1);

        // حساب العناصر الموجودة في المنتصف
        for (let j = 1; j < i; j++) {
            row[j] = result[i - 1][j - 1] + result[i - 1][j];
        }

        result.push(row);
    }

    return result;
};