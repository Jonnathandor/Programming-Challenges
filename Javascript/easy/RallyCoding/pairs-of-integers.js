// Problem: You are given two sorted arrays of integers
// and an integer K as arguments. Find one integer from each 
// array that sums up to the integer K and return the 
// pair as an array of integers.
const solve = (arrayOne, arrayTwo, k) => {
    const numbers = [];
    let y = 0;
    for(let x of arrayOne){
      y = k - x;
      if(arrayTwo.includes(y)){
        return [x,y]
      }
    }
    return [];
};

// solve([1,2,3], [4,5,6], 8)
// > [2, 6]