// You are given an array of integers as an argument. 
// Return true if there is a point in the array where
// the sum of the left hand side would be equal to the sum of the right hand side.
// The argument array will always have an odd number of 3 or more elements.

// I hate this solution
const solve = (intArray) => {
    let sum1 = 0;
    let sum2 = 0;
    
    for(let i = 0; i < (intArray.length - 2); i++){ sum1 += intArray[i]; }
  
    for(let i = 2; i < intArray.length; i++){ sum2 += intArray[i]; }
  
    return (sum1 === intArray[intArray.length - 1]) || (sum2 === intArray[0]); 
};

console.log(solve([5,5,-1,3,9])); // true
console.log(solve([5,1,3,9])); // false
console.log(solve([5,4,3,9])); // true