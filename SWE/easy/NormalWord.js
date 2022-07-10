// Given a string called paragraph and a list of words called banned, 
// return the most frequent word that occurs in the paragraph but 
// is also not a word in the list of banned words.

// You may assume that there is always one word that isn't 
// banned and the answer is unique. Also, note that words 
// in banned will always be lowercase and won't contain punctuation 
// but the words in the paragraph are not case sensitive and 
// contain punctuation. Return your answer in lowercase.

// Example:

// Input: 
// paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
// banned = ["hit"]
// Output: "ball"
// Explanation: 
// "hit" shows up 3 times, but it is banned so it doesn't count.
// "ball" shows up 2 times and it's not banned. 
const mostCommonWord = (paragraph, banned) => {
    const wordCount = {};
    const words = paragraph.toLowerCase().match(/\w+('\w+)?/g); // We only want words... this does the job
    
    for(const word of words){
        // if the word is not in the hashmap then we add it and set it to one
        // else we want to update the count
      !(word in wordCount)? wordCount[word] = 1 : wordCount[word] = wordCount[word] + 1;
    }
    
    let mostFrequentWord = '';
    let maxCount = 0;
    
    for(word in wordCount){
        // We do not care about the banned words
        // so we simple move on to the next one
        if(banned.includes(word)) continue;
        
        // We check the number of 
        // occurances of the current word
        // if it is greater than the max count seen
        // we got to update 
        if(wordCount[word] > maxCount){
            maxCount = wordCount[word];
            mostFrequentWord = word;
        }
    }
    
    return mostFrequentWord;
};