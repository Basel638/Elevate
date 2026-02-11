1/**
2 * @param {number[]} prices
3 * @return {number}
4 */
5var maxProfit = function(prices) {
6    let minPrice = 10001
7    let maxProfit = 0
8
9
10    for(let price of prices)
11    {
12        if(price < minPrice)
13            minPrice = price;
14        
15        let profit = price - minPrice;
16
17        if(profit > maxProfit)
18            maxProfit = profit;
19        
20    }
21
22    return maxProfit;
23};