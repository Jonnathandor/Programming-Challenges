// You are given an array of strings containing some duplicates as an argument.
// Return an array without any duplicated strings.

// solve(["a","b","b","a","c","d"])
// > ["a","b","c","d"]

const solve = (strArray) => {
    const singleValues = [];
    for(const word of strArray){
      if(singleValues.includes(word)){
        continue; 
      }
      singleValues.push(word);
    }
    
    return singleValues;
};

// solve(["a","b","b","Hello!","c","goodbye", "Hello!"])
// > ["a","b","Hello!","c","goodbye"]