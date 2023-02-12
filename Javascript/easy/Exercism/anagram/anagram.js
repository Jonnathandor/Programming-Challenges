export const findAnagrams = (word, listOfWords) => {
  const SORTED_WORD = word.toLowerCase().split("").sort().join();
  const ANAGRAMS = [];
  for(const ITEM of listOfWords){
    const SORTED_ITEM = ITEM.toLowerCase().split("").sort().join();
    if(SORTED_WORD === SORTED_ITEM && word.toLowerCase() !== ITEM.toLowerCase()) { ANAGRAMS.push(ITEM); }
  }
  return ANAGRAMS;
};
