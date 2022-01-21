
// Operator	Example
// +	2 + 6 == 8
// -	10 - 5 == 5
// *	4 * 2 == 12
// /	13 / 3 == 4
// %	13 % 3 == 1

// For integer division, the remainder is dropped (eg. 5 / 2 == 2).

// You cannot perform divisions on different types of variables

var x int = 42

// this line produces an error
value := float32(2.0) * x // invalid operation: mismatched types float32 and int

// you must convert int type to float32 before performing arithmetic operation
value := float32(2.0) * float32(x)

