// You have an array, prices, in which the ith element represents the price of stock on day i.
// Find the maximum profit if you can perform at most one transaction and you must buy the stock before selling.

// index: 0, 1, 2, 3, 4, 5
// prices: [8,1,4,2,8,9]
// day 1 = 1
// day 5 = 9
// in order to have the best profit we would buy on day 1 and sell in day 5

// We need to figure out what is the cheapest day and the highest one to calculate the best profit
// so we can use a loop to iterate the prices and keep track of the lowest price 
// and the difference between the the current stock price and the lowest price seen.
const maxPorfit = (prices) => {
    let minPrice = prices[0];
    let maxDiff = 0;

    for (const price of prices) {
        minPrice = Math.min(price, minPrice); // min price
        maxDiff = Math.max(maxDiff, price - minPrice); // what is the difference 
        // between the maxDifference (which represents the max profits) and the difference
        // between the current stock price and the min price seen
    }

    return maxDiff
}
