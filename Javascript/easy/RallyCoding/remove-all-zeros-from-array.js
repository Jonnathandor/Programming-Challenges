/* Problem: You are given an array of integers containing some zeros as an argument.
Return an array of integers with all zeros removed, while maintaining the original order. */

const solve = (intArray) => {
    return intArray.filter(number => number > 0);
};

/* solve([0, 0, 2, 0, 3, 0, 5])
> [2, 3, 5] */