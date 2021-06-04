// You are given two sorted arrays of integers as arguments.
// Return a new array combining elements from both arrays in sorted order.

// There will never be duplicate integers in either array.

const solve = (arrOne, arrTwo) => {
    let arrayThree = arrOne.concat(arrTwo);
    return arrayThree.sort((a,b) => a - b);
};

// solve([-1, 0, 5], [-2, 3, 15])
// > [-2,-1,0,3,5,15]