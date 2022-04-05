// You can represent the absence of a value with 
// null and undefined

// null literally means "empty value"
let name = null // the variable is set to empty

name === null // true

// But a variable thas has not been assign any value is 
// of type undefined

// If a variable is declared without a value
// then it is undefined

// If you try to access a key that does not exists 
// in an object then you will get undefined

// When a function is void, the result is undefined

// If an argument is not passed then it is undefined 

let lastName 
console.log(lastName) // undefined

lastName === undefined // true

// Optional Chaining
// If you try to retrieve a nested value in an object but the parent key does not exist,
// JavaScript will throw an error. 
// To easily avoid this, optional chaining was added to
// the language specification in 2020. With the optional chaining operator ?. 
// you can ensure that JavaScript only tries to access the nested key if
//  the parent was not null or undefined. Otherwise undefined is returned.

const obj = {
    address: {
      street: 'Trincomalee Highway',
      city: 'Batticaloa',
    },
  };
  
  obj.address.zipCode;
  // => undefined
  
  obj.residence.street;
  // => TypeError: Cannot read property 'street' of undefined
  
  obj.residence?.street;
  // => undefined

// Nullish Coalescing
// There are situations where you want to apply a default value
// in case a variable is null or undefined (but only then). 
// To address this, the nullish coalescing operator ?? was introduced in 2020. 
// It returns the right-hand side operand only when the left-hand side 
// operand is null or undefined. Otherwise, the left-hand side operand is returned.

let amount = null;
amount = amount ?? 1;
// => 1

amount = 0;
amount = amount ?? 1;
// => 0