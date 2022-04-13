// If you see a function passed as an argument 
// then you are seeing a callback. 
// This is mostly done to control the flow in an 
// asynchronous context.

// The arguments of the callback function 
// must match the signature required by the calling function. 

const squareLength = 5;

// Caller function takes a callback function
function applyToSquare(callback) {
  return callback(squareLength);
}

// Callback must expect the possible argument from the calling function
function areaOfSquare(number) {
  return number * number;
}

applyToSquare(areaOfSquare); // => 25