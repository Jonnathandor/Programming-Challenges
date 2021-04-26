

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