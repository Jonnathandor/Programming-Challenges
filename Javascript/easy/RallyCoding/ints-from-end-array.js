/* Problem: You are given an array of integers and an integer K as arguments.
Return a new array containing only integers that are K elements from the end of the array.
Assume that the argument array will always be at least integer K in size. */

const solve = (intArray, k) => {
    const newArray = [];
    let counter = 0;
    for(let i = intArray.length -1; counter < k ; i--){
      newArray.unshift(intArray[i]);
      counter++;
    }
    
    return newArray;
};

/* solve([1,2,3,4], 2)
> [3, 4] */

