// Problem: You are given an array of strings and a single string as arguments.
// Return true if the single string is also present in the array.

const solve = (strArray, strArg) => {
    return strArray.includes(strArg);
};

// solve(['apple', 'orange', 'banana'], 'orange' )
// > true