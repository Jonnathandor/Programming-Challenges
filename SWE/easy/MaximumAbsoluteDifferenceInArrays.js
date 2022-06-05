// Given m number of arrays with each array sorted in ascending order, choose up to 2
// integers from 2 different arrays and calculate the absolute difference.
// Return the maximum difference between the 2 integers from the 2 different arrays.

// Example 1:

// Input: 
// [[1,2,3],
//  [4,5],
//  [1,2,3]]
// Output: 4
// Explanation: 
// The maximum distance is 4. Choose 1 in the first or third array and choose 5 in the second array.
// Note:

// Assume each array will have at least 1 number. There will always be at least two non-empty arrays.
// The number of integers in all the m arrays will be in range[2, 10000].
// The integers in the m arrays will be in range[-10000, 10000].

const maxDistance = (arrays) => {
    //Remember the arrays are sorted so we can start 
    // by setting the min and max variables 
    // with the first and last values of the first array
    let min = arrays[0][0]; // min value of the first array
    let max = arrays[0][arrays[0].length - 1]; // the max value of the first array
    let maxDifference = 0;

    for (let i = 1; i < arrays.length; i++) {
        let currentArray = arrays[i];

        // Remember the arrays are sorted so the min element
        // of the current array is in position 0 
        // and the max in position 1 so we just need to figure out
        // if the current max difference is greater than the one 
        // currently stored in maxDifference
        // Since the max absolute difference must be from two different arrays, 
        // the maxDiff could potentially be the absolute(maxVal - minimum value in the current array) 
        // or absolute(maximum value in the current array - minVal). 
        // If any of these two values are greater than the current stored maxDiff 
        // then replace maxDiff with that value.
        maxDifference = Math.max(maxDifference, Math.abs(max - currentArray[0]), Math.abs(currentArray[currentArray.length -1] - min));
        min = Math.min(currentArray[0], min);
        max = Math.max(currentArray[currentArray.length -1], max); 
    }

    return maxDifference;
}