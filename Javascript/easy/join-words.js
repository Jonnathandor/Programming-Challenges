/* Problem: You are give an array of strings and a single character K as arguments.
Return a single string containing all of the original strings joined by the character K. */

const solve = (strArray, k) => {
    return strArray.join(k)
};

/* solve(['Hi', 'there', 'how', 'are', 'you'], '_')
> 'Hi_there_how_are_you' */