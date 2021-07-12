// You are given an array of lowercase single string characters as an argument.
// Return the same array but with each character alternating lowercase, then uppercase.
const solve = (strArray) => {
    let newArray = strArray.map((letter,i) => (i % 2) == 0 ?  letter.toLowerCase() : letter.toUpperCase());
    return newArray;
};

// solve(['a', 'b', 'c', 'd', 'e'])
// > ['a', 'B', 'c', 'D', 'e']