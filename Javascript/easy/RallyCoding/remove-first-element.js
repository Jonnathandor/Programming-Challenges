// You are given an array of strings as an argument.
// Return a new array containing all elements from
// the original array excluding the first element.
// The argument array will always be at least two elements long.

const solve = (strArray) => {
    strArray.shift();
    return strArray;
};

// solve(["pears", "apples", "oranges"])
// > ["apples", "oranges"]