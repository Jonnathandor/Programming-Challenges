// Problem: Given five positive integers
// find the minimum and maximum values that can be
// calculated by summing exactly four of the five integers.
//Example: [1,3,5,7,9]
//The minimum sum is  and the maximum sum is .
//The function prints: 16 24

function minMaxSum(array){
    let sortedArray = arr.sort();
    let sum = 0; 
    let max = sortedArray[sortedArray.length -1];
    let min = sortedArray[0];

    for(let number of sortedArray){
        sum += number;
    }
    console.log(sum - max, sum - min);
}