// If you need to report that something went wrong 
// you can use the error object. 
const error = new Error('Oops, something went wrong');

console.log(error.message);
// => "Oops, something went wrong"

// Youv can also throw errors, which means that 
// the code execution will stop and the first catch block 
// will be called
try {
    throw new Error('Oops');
  } catch (error) {
    console.log(error.message);
    // => "Oops"
}

// You can also create your own custom errors
// by extending the the Error 

class CustomError extends Error {}

try {
  // ... Code that may throw an error
} catch (error) {
  if (error instanceof CustomError) {
    console.log('The error thrown is an instance of the CustomError');
  }
}