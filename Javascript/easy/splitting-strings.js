/* Problem: You are given a string and integer K as arguments.
Split the string into an array of strings,
where each element is no longer than K characters long. Return the resulting array.
The argument string will always be at least K characters long. */

const solve = (strArg, k) => {
    strArg = strArg.split('');
    let counter = 0;
    let arr = [];
    let subString = '';
    for(let letter of strArg){
      subString = subString.concat(letter);
      counter++
      if(counter === k){
        arr.push(subString);
        counter = 0;
        subString = '';
        if(strArg.indexOf(letter) === (strArg.length -1)) break;
      } 
      
      if(strArg.indexOf(letter) === (strArg.length -1)){
        arr.push(subString);
      }
    }
    
    return arr;
};

/* solve('abcdefgh', 5)
> ['abcde','fgh'] */