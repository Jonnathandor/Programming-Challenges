/* Problem: You are given an array of integers and an integer K as arguments.
Return the element that is the Kth index from the end of the array.
Assume that the argument array length will always be at least K + 1 */

const solve = (intArray, k) => {
    return intArray[intArray.length - 1 - k]
};

/* solve([-1,2,3,-4,5,0], 3)
> 3 */