// Problem: You are given a single word string as an argument.
// Return true if it contains two identical
// characters in a row, false if not.

const solve = (strArg) => {
    let wordChars = strArg.split('');
    let pointerOne = 0;
    let pointerTwo = 1;
    for(let i = 0; i < wordChars.length; i++){
      if(wordChars[pointerOne] === wordChars[pointerTwo]){
        return true;
      }
      pointerOne++;
      pointerTwo++;
    }
    
    return false;
};

// solve("terrific")
// > true