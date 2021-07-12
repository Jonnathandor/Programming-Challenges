/* Problem: You are given an array of non-negative integers as an argument.
 Return the first element found in the array whose index is equal to its value. */

const solve = (intArray) => {
    for(let i = 0; i < intArray.length; i++){
      if(i === intArray[i]){
        return i
      }
    }
    return 0 
};

/* solve([10, 20, 11, 12, 4])
> 4 */