/* Problem: You are given an array of integers as an argument.
Return an array containing all elements from the argument array, omitting the first element.
Assume the argument array will always contain at least two elements. */

const solve = (intArray) => { 
    intArray.shift();
    return intArray;
};