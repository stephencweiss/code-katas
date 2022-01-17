/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/
 * very similar to src/55-stock-picking/getMaxProfit.js
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0
    let buyPrice = Infinity

    for (price of prices) {
        // keep track of the best buy price we've seen so far
        buyPrice = Math.min(price, buyPrice)
        // calculate max profit by looking at the current price - (best) buy price vs. our previously found max profit
        maxProfit = Math.max(maxProfit, price - buyPrice)
    }

    return maxProfit
}
