// You are given an array containing multiple single word strings as an argument.
// Return true if they are all anagrams of each other.

// An anagram is a word made by rearranging the letters of a different word,
// using all the letters exactly once.
// Consider upper and lower case characters the same.

const solve = (strArray) => {
    const firstWordLetters = strArray[0].toLowerCase().split('').sort();
    
    for(let i = 1; i < strArray.length; i++){
      let currentLetters = strArray[i].toLowerCase().split('').sort();
      
      if(currentLetters.length !== firstWordLetters.length ||
        firstWordLetters[i-1] !== currentLetters[i-1]){
        return false
      } 
    }
    return true;
};

// solve(["act","cat","tac"])
// > true

// solve(["act","cat","garden"])
// > false

// solve(["UPPERCASE", "praepuces"])
// > true