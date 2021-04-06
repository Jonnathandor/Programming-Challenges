/* Problem: You are given a two dimensional array 
containing arrays of integers as arguments. 
Return the amount of times that the number 1 is found in any of the arrays. */

const solve = (intArray) => {
    let counter = 0;
    for(let subIntArray of intArray){
      for(number of subIntArray){
        if(number == 1){
          counter++
        }
      }
    }
    
    return counter
};

/* solve([
    [1, 4, 2, 1],
    [6, 3, 8, 9],
    [1, 5, 1, 0]
  ])
  > 4 */

