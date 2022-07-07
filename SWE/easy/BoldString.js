// Given a string s and a string array called dict, 
// return a string such that all substrings of s 
// that belong in dict are wrapped with bold tags:
// <b> and </b>. If two substrings overlap each other 
// then wrap them together by a bold tag. If two substrings 
// are consecutive then also wrap them together by the same bold tag.

// Example 1:

// Input: 
// s = "abcxyz123"
// dict = ["abc","123"]
// Output:
// "<b>abc</b>xyz<b>123</b>"
// Example 2:

// Input: 
// s = "aaabbcc"
// dict = ["aaa","aab","bc"]
// Output:
// "<b>aaabbc</b>c"

// In order to get to the solution we will first find all the indices
// in the string where words in the dictionary appear and mark them
// secondly we will need to wrap in a bold tag all the consecutive indices that 
// are marked
const addBoldTag = (word, dict) => {
    // For every element in the word we will need to initialize to false
    const marked = new Array(word.length);
    console.log(marked.length);
}

addBoldTag('test', {});