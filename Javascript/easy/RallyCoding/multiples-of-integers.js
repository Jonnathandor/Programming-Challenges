/* Problem: You are given an array of integers and an integer K as arguments.
Return true if each integer is an even multiple of integer K. */

const solve = (intArray, k) => {
    for(number of intArray){
      if(number%k !== 0){
        return false;
      }
    }
    
    return true;
};

/* solve([12, 14, 36, 18], 9)
> false

Only 18 and 36 are multiples of 9 */