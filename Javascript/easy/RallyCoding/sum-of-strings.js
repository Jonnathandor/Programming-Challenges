// Problem: Find the sum of two integers represented as strings.
// For example, given the string "123" and
// the string "111", your code should return the string "234".

const solve = (strOne, strTwo) => {
    let sum = Number(strOne) + Number(strTwo);
    return sum.toString();
};