// Problem: Given five positive integers
// find the minimum and maximum values that can be
// calculated by summing exactly four of the five integers.
//Example: [1,3,5,7,9]
//The minimum sum is  and the maximum sum is .
//The function prints: 16 24

function minMaxSum(array){
    let sortedArray = array.sort();
    let minSum = 0; 
    let maxSum = 0;

    for(let number of sortedArray){
        if(sortedArray.indexOf(number) !== 0){
            maxSum += number;
        }

        if(sortedArray.indexOf(number) !== sortedArray.length -1){
            minSum += number;
        }
    }

    console.log(minSum, maxSum);
}