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