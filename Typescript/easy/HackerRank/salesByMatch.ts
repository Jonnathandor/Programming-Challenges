// There is a large pile of socks that must be paired by color.
// Given an array of integers representing the color of each sock,
// determine how many pairs of socks with matching colors there are.

// n = 7
// ar = [1,2,1,2,1,3,2]

// STDIN                       Function
// -----                       --------
// 9                           n = 9
// 10 20 20 10 10 30 50 10 20  ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]

// Sample Output = 3

function sockMerchant(n: number, ar: number[]): number {
    // Write your code here
    const sortedArray = ar.sort((a,b) => a-b);
    let counter = 1;
    let pair = 0;
    
    for(let i = 1; i < sortedArray.length; i++){
        if(sortedArray[i] === sortedArray[i-1]){
            counter++;
        } else {
            pair += Math.floor(counter/2);
            counter = 1;
        }
    }
    pair += Math.floor(counter/2);
    return pair;
}

