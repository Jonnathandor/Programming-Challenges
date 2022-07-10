// Given an integer array, find three numbers whose product is maximum and output the maximum product.

// Given an array of integers, return the maximum product between any 3 numbers in the array.

// Example 1:

// Input: [1,2,3]
// Output: 6
 

// Example 2:

// Input: [1,2,3,4]
// Output: 24

// The solution would either be the three largest numbers multiplied together or
// the two smallest numbers multiplied with the largest number. 
// We must consider the case with the two smallest numbers in the case of negative values.
const maximumProduct = (nums) => {
    sortedNums = nums.sort((a,b) => a-b); // sorts from smallest to largest
    //(first two smalles numbers(negatives) and the largest one, three largest numbers)
    return Math.max((sortedNums[0] * sortedNums[1] * sortedNums[sortedNums.length -1]), (sortedNums[sortedNums.length -1] * sortedNums[sortedNums.length -2] * sortedNums[sortedNums.length -3]));
}