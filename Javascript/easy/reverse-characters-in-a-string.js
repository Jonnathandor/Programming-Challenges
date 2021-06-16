// You are given a string that forms a sentence as an argument.
// Reverse the characters in each word, but not the words themselves.
// Return the resulting string.

const solve = (strArray) => {
    let reversedLetters = strArray.split('').reverse().join('');
    let reverseFinal = reversedLetters.split(' ').reverse().join(' ');
    return reverseFinal;
};

// solve("How are you?")
// > "woH era ?uoy"