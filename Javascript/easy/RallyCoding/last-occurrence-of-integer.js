// You are given an array of integers and an integer K as arguments.
// Return the index of the last occurrence of integer K in the array.
// Argument Integer K is guaranteed to be found in the array at least once.
const solve = (intArray, k) => {
    let lastOccurance = 0;
    let indexCounter = 0;
    for(let current of intArray){
      if(current === k){
        lastOccurance = indexCounter;
      }
      indexCounter++;
    }
    return lastOccurance;
};

// solve([4, 1, 3, 5, 3, 4, 2], 4)
// > 5