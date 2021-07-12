// You are given a string representing a sentence as an argument.
// Return an array with each word from the string as separate string element,
// removing any special characters, punctuation or spaces.

const solve = (strArg) => {
    const regex = /[^\w\s]/gi;
    let cleanString = strArg.replace(regex, '').split(' ');
    const words = cleanString.filter(word => word !== '');
    return words;
};

// solve("Hi, how are you; I was quite curious!")
// > ["Hi", "how", "are", "you", "I", "was", "quite", "curious"]

// solve("Hello!!! The- sun- is- shining?")
// > ["Hello", "The", "sun", "is", "shining"]