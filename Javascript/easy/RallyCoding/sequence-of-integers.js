// You are given an array of integers and a shorter array
// containing a sequence of integers as arguments.
// Return true if the sequence of integers can be found in the first array.

const solve = (intArray, sequence) => {
    return intArray.join('').includes(sequence.join('')); 
};

// solve([1, 2, 3, 4, 5, 6], [3, 4, 5])
// > true