// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.
// Print the decimal value of each fraction on a new line with 6 places after the decimal.

// Note: This challenge introduces precision problems. 
// The test cases are scaled to six decimal places, though answers with absolute error of up to 10^-4  are acceptable.

function plusMinus(arr) {
    // Write your code here
    const totalValues = arr.length;
    let positiveValues = 0;
    let negativeValues = 0;
    let zeroValues = 0;
    
    for(const number of arr){
        if(number > 0){
            positiveValues++;
        } else if(number < 0){
            negativeValues++;
        } else {
            zeroValues++
        }
    }
    
    console.log((positiveValues/totalValues).toFixed(6));
    console.log((negativeValues/totalValues).toFixed(6));
    console.log((zeroValues/totalValues).toFixed(6));
}