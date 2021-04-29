// Problem: You are given two arrays of integers as arguments.
// Return true if they contain the exact same elements in any order.
const solve = (arrOne, arrTwo) => {
    for(let number of arrOne){
      if(!arrTwo.includes(number)){
        return false;
      }
    }
    return true;
};