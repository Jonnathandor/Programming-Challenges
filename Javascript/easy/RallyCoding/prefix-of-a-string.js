/* Problem: You are given two single word strings as arguments.
Return true if the second string is a prefix of the first. */

const solve = (strOne, strTwo) => {
    return strOne.startsWith(strTwo)
};

/* solve('hugging', 'hug')
> true */