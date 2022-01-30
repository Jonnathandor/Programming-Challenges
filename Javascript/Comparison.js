// Comparison	Operator
// Greater than	a > b
// Greater than or equals	a >= b
// Less than	a < b
// Less than or equals	a <= b
// (Strict) Equals	a === b
// Not (strict) equals	a !== b

// The result of the comparison is always a boolean value, so either true or false.

1 < 3;
// => true

2 !== 2;
// => false

1 === 1.0;
// => true
// All numbers are floating-points, so this is different syntax
// for the exact same value.

// In JavaScript, the comparison operators above can also be used to compare strings. 
// In that case, a dictionary (lexicographical) order is applied.

'Apple' > 'Pear';
// => false

'a' < 'above';
// => true

'a' === 'A';
// => false

// Strict Equality

// === represents the check for strict equality which means
// that no type conversion is performed and values of different 
// types are always unequal.

'3' === 3;
// => false
// The value on the left has type string, the value on the right
// has type number.

1 === 1n;
// => false
// The value on the left has type number, the value on the right
// has type bigint.
