// Problem: You are given an array of integers
// and an integer K as arguments. Return the product of
// every integer in the array except for K.
// K is guaranteed to always be present in the argument array.

const solve = (intArray, k) => {
    let product = intArray.reduce((accumulator, currentValue) => {
      if(currentValue === k){
        return accumulator;
      }
      
      return accumulator * currentValue
    })
    return product;
};

// solve([1,2,3,4,5], 3)
// > 40