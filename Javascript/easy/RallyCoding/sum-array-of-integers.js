// You are given an array of integers as an argument. 
// Return the sum of all elements in the array.

const solve = (intArray) => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return intArray.reduce(reducer);
}

console.log(solve([1, 5, 4]));
// > 10