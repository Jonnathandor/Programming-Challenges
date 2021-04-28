// Problem: You are given an array of integers and an
// array containing a range of integers (in the form of \[X, Y]) as arguments.
// Return an array containing all of the elements from the
// array of integers that are contained in the range.
// X will always be a smaller number than Y.
// There will always be at least one integer from the array found the X,Y range.

const solve = (intArray, range) => {
    // const x = range[0];
    // const y = range[1];
    // const inRange = [];
    
    // for(let number of intArray){
    //   if(number > x && number < y){
    //     inRange.push(number);
    //   }
    // }
    // return inRange;
    const inRange = intArray.filter(number => number > range[0] && number < range[1]);
  
    return inRange;
  };