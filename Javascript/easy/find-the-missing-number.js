// You are given an unsorted array of integers as an argument.
// When sorted, the numbers in the array will form a sequence.
// One number in the sequence is missing. Return the missing number.

const solve = (intArray) => {
    const sortedArray = intArray.sort((a,b) => a - b);
    
    for(let i = 0; i < sortedArray.length; i++){
      if(sortedArray[i+1] !== (sortedArray[i]+1)){
        return (sortedArray[i]+1);
      }
    }
};

// solve([5, 0, 2, 1, 3])
// > 4

// solve([-5, 0, -2, -1, -3])
// > 4