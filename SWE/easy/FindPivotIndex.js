// Given an array of integers, return the index such that the sum of the integers 
// on the left is equal to the sum of the integers on the right. If no index exists, 
// return -1. If there are multiple indexes that exist, return the left-most one.

// Example 1:

// Input: 
// nums = [1, 7, 3, 6, 5, 6]
// Output: 3
// Explanation: 
// The sum of the integers on the left of index 3 is equal to the sum of integers on the right of index 3.
 

// Example 2:

// Input: 
// nums = [1, 2, 3]
// Output: -1
// Explanation: 
// No index exists that can satisfy the problem statement.

// Get the left sum and right sum at every index by first getting the total sum
// and then iterating through the array a second time while maintaining a variable for the left sum.
// To get the right sum we would just take the total sum minus the current index and the left sum.
const pivotIndex = (nums) => {
    // empty array?
    if(nums.length === 0) return -1;

    let total = nums.reduce((a,b) => a + b);
    let leftSum = 0;
    let rightSum = 0;
    
    for(let i = 0; i < nums.length; i++){
        rightSum = total - nums[i] - leftSum;
        if(leftSum === rightSum) return i;
        leftSum += nums[i];
    }
    
    return -1;
};