/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    let ans = [0, 1];
    for (let i = 1; i < n; i++) {
        let temp = [...ans].reverse();
        for (let j = 0; j < temp.length; j++) temp[j] += 1 << i;
        
        ans = ans.concat(temp);
    }
    return ans;
};