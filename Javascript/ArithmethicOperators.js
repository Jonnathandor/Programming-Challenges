//+: The addition operator is used to find the sum of numbers.
1 + 2; // => 3
2.5 + 3.9; // => 6.5

// -: The subtraction operator is used to find the difference between two numbers
19 - 2; // => 17
7.4 - 1.2; // => 1.5

// *: The multiplication operator is used to find the product of two numbers
7 * 5; // => 35
9.2 * 6.3; // => 57.959999999999994

// /: The division operator is used to divide two numbers. Since JavaScript numbers are always floating-point numbers, there is no integer division.
8 / 2; // => 4
25 / 3; // => 8.333333333333334

// %: The remainder operator is used to find the remainder of a division performed.

40 % 4; // => 0
11 % 4; // => 3
-11 % 4; // => -3

// **: The exponentiation operator is used to raise a number to a power. It is the equivalent of using Math.pow()
4 ** 3; // => 64
4 ** 1 / 2; // => 2

//PEMDAS
const result = 3 ** 3 + 9 * 4 / (3 - 1);
// => 3 ** 3 + 9 * 4/2
// => 27 + 9 * 4/2
// => 27 + 18
// => 45