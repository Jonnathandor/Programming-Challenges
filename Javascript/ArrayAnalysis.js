// The ide of built in methods 
// is that you use something else 
// in place of the normal for loop 
// or forEach loop. 

// indexOf() returns the index of hte element if 
// found or -1 if the element is not present. 
const numbers = [1, 'two', 3, 'four'];
numbers.indexOf('two');
// => 1

// includes() is your best friend is you want 
// to know if a value is part of the array 
// it returns true or false. 
const numbersTwo = [1, 'two', 3, 'four'];
numbersTwo.includes(1);
// => true
numbersTwo.includes('one');
// => false


// If you want to pass a test on each element 
// in the array you can use the every() method
const numbersThree = [1, 3, 5, 7, 9];
numbersThree.every((num) => num % 2 !== 0);
// => true

// If you are happy with having only 
// some elements passing the test then some() is a better 
// fit
const numbersFour = [1, 3, 5, 7, 9];
numbersFour.some((num) => num % 2 !== 0);
// => true

// If you need to return the first value 
// that satisfy the test ... find()
const numbersFive = [1, 3, 5, 7, 9];
numbersFive.find((num) => num < 5);
// => 1

// If you use findIndex() then the index
// of the first element that passes the test is returned 
// otherwise -2 is returned
const numbersSix = [1, 3, 5, 7, 9];
numbersSix.findIndex((num) => num > 7);
// => 4
numbersSix.findIndex((num) => num > 9);
// => -1