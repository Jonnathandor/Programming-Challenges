//You are given a string and integer K as arguments.
//Return the Kth most frequently occurring character.

const solve = (strArg, k) => {
    const letters = strArg.split('');
    const letterFrequency = {};
    for(const letter of letters){
        if(letterFrequency.hasOwnProperty(letter)){
            letterFrequency[letter] += 1; 
        } else {
            letterFrequency[letter] = 1;
        }
    }
  
    let counter = 1;
    for(const letter in letterFrequency){
        if(counter === k){
            return letter;
        }
      counter++;
    }
};

// solve("aaabbc", 2)
// > "b"

// solve("bbbbxyyzzz", 3)
// > "y"