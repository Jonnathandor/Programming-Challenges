// Given a list of integers and a number K,
// find the sequence of elements K long that results in the largest sum.

// const solve = (intArray, number) => {
//     const sortedNumbers = intArray.sort((a,b) => a - b);
//     const elements = [];
//     let offset = sortedNumbers.length - number;
//     for(let i = offset; i < sortedNumbers.length; i++){
//       elements.push(sortedNumbers[i]);
//     }
//     return elements;
// };

//Without sorting, I like this solution better than mine, 
// it does not waste time sorting numbers

const solve = (intArray, number) => {
    let nums = []; 
    let max = 0;

    for (let i = 0; i < intArray.length; i++) {

        // Slicing the original array to get the first "k" numbers 
        // and then updating on each iteration 
        const sliceNums = intArray.slice(i, i + number);

        // then we simply sum those numbers 
        const sum = sliceNums.reduce((acc, sum) => acc + sum, 0);

        // if the sum is greater than the max we simply update the max sum
        // and the numbers that conform the sum
        // ... a lot to learn in the future
        if (sum > max) {
            max = sum;
            nums = sliceNums;
        }
    }
    return nums;
};

console.log(solve([3,4,5,5,3],2));
console.log(solve([2, 5, 4, 1],3));


