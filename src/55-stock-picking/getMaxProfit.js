function getMaxProfit(prices) {
    if (prices.length < 2)
        throw new Error('need at least two prices to compare')
    let maxTradeValue = Number.NEGATIVE_INFINITY
    let lowestPriceSeenIndex = 0
    let anchorIndex = 0
    let currentIndex = 1
    while (
        anchorIndex <= prices.length - 2 &&
        currentIndex <= prices.length - 1
    ) {
        const currentPrice = prices[currentIndex]
        const nextPrice = prices[currentIndex + 1]
        const anchorPrice = prices[anchorIndex]
        const lowestPriceSeen = prices[lowestPriceSeenIndex]

        if (currentPrice <= lowestPriceSeen) lowestPriceSeenIndex = currentIndex

        if (maxTradeValue < currentPrice - anchorPrice)
            maxTradeValue = currentPrice - anchorPrice

        if (currentPrice < anchorPrice) {
            anchorIndex = currentIndex
            currentIndex = anchorIndex + 1
        } else if (nextPrice) {
            currentIndex += 1
        } else {
            anchorIndex += 1
            currentIndex = anchorIndex + 1
        }
    }

    return maxTradeValue
}

const priceSetOne = [10, 7, 5, 8, 11, 9]
getMaxProfit(priceSetOne) //6

module.exports = { getMaxProfit }

/**
 * Notes:
 * Interestingly, if I was able to "Short" the trades, I could _just_ track the lowest number and highest numbers seen.
 * Tracking the indices is useful, but probably not necessary.
 */
