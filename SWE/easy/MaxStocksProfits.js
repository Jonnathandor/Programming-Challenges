// You have an array, prices, in which the ith element represents the price of stock on day i.
// Find the maximum profit if you can perform at most one transaction and you must buy the stock before selling.

// index: 0, 1, 2, 3, 4, 5
// prices: [8,1,4,2,8,9]
const maxPorfit = (prices) => {
    let minPrice = prices[0];
    let maxDiff = 0;

    for (const price of prices) {
        minPrice = Math.min(price, minPrice);
        maxDiff = Math.max(maxDiff, price - minPrice);
    }

    return maxDiff
}
