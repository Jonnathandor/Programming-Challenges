// You are given an array of integers containing some duplicates as an argument.
// Return the first element in the array that is duplicated twice.

const solve = (intArray) => {
    const table = [];
    for(const number of intArray) {
      if(table.includes(number)){
        return number; 
      }
      table.push(number);
    }
};

console.log(solve([6, 2, 5, 1, 0, 12, 2]));
//> 2

console.log(solve([-6, 1, 5, -6, 0, -2, 3]));
//> -6

console.log(solve([3, 1, 5, 1, 0, -2, 3, 5]));
//> 1