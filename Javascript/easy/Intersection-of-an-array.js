// You are given two arrays of integers as arguments. 
// Return an array of integers which represents the 
// intersection - the common elements from the original two arrays.

const solve = (arrOne, arrTwo) => {
    const contains = [];
    for(let number of arrOne){
      if (arrTwo.includes(number)){
        contains.push(number);
      }
    }
    
    return contains;
};

// solve([1, 2, 3, 4, 5], [4,2])
// > [2,4]