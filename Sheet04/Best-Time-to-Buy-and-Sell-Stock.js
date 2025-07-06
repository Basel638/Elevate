/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let dp = [prices[0]];
    let maxProfit = 0;
    for(let i = 1; i < prices.length; i++)
    {
        dp[i] = Math.min(prices[i] , dp[i-1]);
        maxProfit = Math.max(maxProfit , (prices[i] - dp[i]) );
    }

    return maxProfit;
};