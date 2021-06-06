// You are given a lowercase string as an argument.
// Return true if each character in the string is
// shown an even number of times, false if not.

const solve = (strArg) => {
    const letters = strArg.split('');
    const letterTable = {}
    
    for(let letter of letters){
      if(letterTable.hasOwnProperty(letter)){
        letterTable[letter] += 1;
      } else {
        letterTable[letter] = 1;
      }
    }
    
    for(let letterValue in letterTable){
      if(letterTable[letterValue] % 2 !== 0){
        return false;
      }
    }
  
    return true;
};

// solve("aabbccdd")
// > true

// solve("abcdeffgg")
// > false