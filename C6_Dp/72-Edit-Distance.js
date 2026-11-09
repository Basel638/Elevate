/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 
let dp;

var solve = function(i, j, word1, word2)
{
    // Base Cases
    if(i == 0)
        return j;

    if(j == 0)
        return i;

    // Already calculated
    if(dp[i][j] != -1)
        return dp[i][j];

    // Characters are equal
    if(word1[i - 1] == word2[j - 1])
        dp[i][j] = solve(i - 1, j - 1, word1, word2);

    else
    {
        let deleteOp = solve(i - 1, j, word1, word2);
        let insertOp = solve(i, j - 1, word1, word2);
        let replaceOp = solve(i - 1, j - 1, word1, word2);

        dp[i][j] = 1 + Math.min(deleteOp, insertOp, replaceOp);
    }

    return dp[i][j];
};

var minDistance = function(word1, word2) {

    let m = word1.length;
    let n = word2.length;

    dp = Array.from(
        { length: m + 1 },
        () => Array(n + 1).fill(-1)
    );

    return solve(m, n, word1, word2);
};
