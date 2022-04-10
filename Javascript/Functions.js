// A function is nothing else but a block of 
// organized code that is used to perform an action. 
// The nice thing is that you can reuse this block of code 
// over and over again. 

// If you want to declare a function you will need the 
// function keyword, give a name to your function 
// and a comma separated list of parameters inside a parentheses. 
// plus the function body which is defined by {} and the code that 
// defines what the function does. 
function someName(param1, param2, param3) {
    // ...
}

// if you want to invoke a function 
// you will need to state the function name 
// with the parentheses and argurments next to the name 
someName(arg1, arg2, arg3);

// primitive data type arguments are immutable
// which means the original value is never affected
// by the code in the function body. 
const num = 0;

function add(num) {
  return num + 1;
}

add(num);
// => 1

num;
// => 0

// Objects, arrays and functions are referenced
// which means that a a shallow copy of the value is passed. 
// Modifying the argument in the body will also change the original 
// value that was passed in. 
const nums = [0, 1, 2, 3, 4];

function add(arr) {
  arr.push(5);
}

add(nums);

nums;
// => (6) [0, 1, 2, 3, 4, 5]

// If you pass less arguments than what was defined 
// in the function signature, then the missing arguments 
// will have a value of undefined

// If you pass more arguments than the ones 
// defined in the original function signature
// then those extra parameters will be found in the 
// arguments array. 

// A varidic function in nothing else than a functions that accepts 
// an arbitrary number of arguments

// It is valid to have multiple return statements. If the function 
// reach a return keyword then the execution of the function stops
// and the value next to the return keyword is returned. 
function checkNumber(num) {
    if (num === 0) {
      return 'You passed 0, please provide another number.';
    }
  
    return 'Thanks for passing such a nice number.';
  }

// if there is not return keyword, then the function will 
// always return 'undefined'
function nakedReturn(a) {
    a * 2;
    return;
  }
  
  nakedReturn(1);
  // => undefined
  
  function noReturn(a) {
    a * 2;
  }
  
  noReturn(1);
  // => undefined

// In JavaScript, you can only return exactly one value. 
// If you want to pass more information, you need to combine it into one entity first, 
// usually into an object, or an array.
function divide(a, b) {
    return {
      quotient: Math.floor(a / b),
      remainder: a % b,
    };
  }

