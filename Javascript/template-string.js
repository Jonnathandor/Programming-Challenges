// If you want to embed expression in strings
// ... template strings are the answers

// In order to create a template you will need to wrap 
// the text in backticks. But not only text is allow, 
// you can also include variables and other kind of characters

const num1 = 1;
const num2 = 2;

`Adding ${num1} and ${num2} gives ${num1 + num2}.`;
// => Adding 1 and 2 gives 3.

// Adding logic is also possible, this is mostly done with the 
// ternary operator. 
const grade = 95;

`You have ${grade > 90 ? 'passed' : 'failed'} the exam.`;
// => You have passed the exam.