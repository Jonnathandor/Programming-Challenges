// You are in charge of the cake for a child's birthday.
// You have decided the cake will have one candle for each year of their total age.
// They will only be able to blow out the tallest of the candles.
// Count how many candles are tallest.

// Example

// candles = [4,4,1,3]

// The maximum height candles are 4 units high. There are 2 of them, so return 2.

/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles: number[]): number {
    // Write your code here
    if(candles.length === 0) { return 0; }
    const sortedCandles = candles.sort((a,b) => b - a);
    
    let tallestCandle = sortedCandles[0];
    let tallestCandles = 1;

    for(let i = 1; i < sortedCandles.length; i ++) {
        if(sortedCandles[i] === tallestCandle) { 
            tallestCandles++;
        } else {
            break;
        }
    }
    
    return tallestCandles;
}