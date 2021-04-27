// Problem: You are given an array of integers as an argument.
//  Reverse the elements in the array without
// using any built in 'reverse' functions and return it.

const solve = (intArray) => {
    const reversedArray = []
    for(let i = intArray.length -1; i >=0; i--){
      reversedArray.push(intArray[i])
    }
    return reversedArray;
};

// solve([1,2,3,4,5)
// > [5,4,3,2,1]