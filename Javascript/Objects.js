// Objects are collections of key-value pairs. 
// In JS they can potentially be used as what other 
// languages know as maps or dictionaries. 

// In JS the key of the object must be a string
// but the values can have different values

const emptyObject = {};

const obj = {
  favoriteNumber: 42,
  greeting: 'Hello World',
  useGreeting: true,
  address: {
    street: 'Trincomalee Highway',
    city: 'Batticaloa',
  },
  fruits: ['melon', 'papaya'],
  addNumbers: function (a, b) {
    return a + b;
  },
};

// You can delete entries from an object
// with the keyword: delete
const objTwo = {
    key1: 'value1',
    key2: 'value2',
  };
  
  delete objTwo.key1;
  delete objTwo['key2'];

// If you need to check if a key exists you can use the 
// hasOwnProperty method

const objThree = { greeting: 'hello world' };

objThree.hasOwnProperty('greeting');
// => true

objThree.hasOwnProperty('age');
// => false


//There is a special for...in loop to iterate over all keys of an object.

const objFour = {
  name: 'Ali',
  age: 65,
};

for (let key in objFour) {
  console.log(key, objFour[key]);
}
// name Ali
// age 65