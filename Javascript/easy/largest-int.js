// Problem: You are given an array of integers as an argument. Return the largest integer.

const solve = (intArray) => {
    let largest = 0;
    for(let value of intArray){
      if(value > largest){
        largest = value
      }
    }
    
    return largest;
};

/* solve([1,-5,3,-7])
> 3 */

console.log(solve([1,-5,3,-7]));