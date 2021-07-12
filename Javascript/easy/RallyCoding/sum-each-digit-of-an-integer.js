// You are given a non-negative integer as an argument.
// Add each digit of the integer together and return the sum.
const solve = (intArg) => {
    const numbers = intArg.toString().split('');
    let sum = 0;
    
    numbers.forEach(number => {
      sum += Number(number);
    });
    
    return sum;
};

// solve(6368206)
// > 31

