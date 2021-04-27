// Problem: You are given a lowercase string as an argument.
// Return true if the string is a palindrome, false if it is not.
// Palindromes are strings that form the same word if it is reversed.

const solve = (strArg) => {
    let reversed = strArg.split('').reverse().join('');
    
    return strArg === reversed;
};

// solve("abba")
// > true