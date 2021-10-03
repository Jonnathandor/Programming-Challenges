// ## Instructions

// An anagram is a rearrangement of letters to form a new word.
// Given a word and a list of candidates, select the sublist of anagrams of the given word.

// Given `"listen"` and a list of candidates like `"enlists" "google" "inlets" "banana"` the program should return a list containing
// `"inlets"`.

export const findAnagrams = (word, listOfWords) => {
    const SORTED_WORD = word.toLowerCase().split("").sort().join();
    const ANAGRAMS = [];
    for(const ITEM of listOfWords){
      const SORTED_ITEM = ITEM.toLowerCase().split("").sort().join();
      if(SORTED_WORD === SORTED_ITEM && word.toLowerCase() !== ITEM.toLowerCase()) { ANAGRAMS.push(ITEM); }
    }
    return ANAGRAMS;
};