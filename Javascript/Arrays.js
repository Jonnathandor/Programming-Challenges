// An array is a list-like structure with no fixed length which
// can hold any type of primitives or objects, even mixed types.

const names = ['Jack', 'Carlos', 'Paul', 'Sofia'];
names[1];
// => Carlos


// Arrays can also be created using the constructor syntax,
// but for most uses, the array literal syntax is recommended.

const pets = new Array();
names.push('Netflix', 'Fido');

names[1];
// => Fido

//Arrays cannot use strings as element indexes but must use integers (number).

// The length property of an array is connected to the list of items the array holds.
// It can be mutated. When the length is increased, it creates empty holes,
// that are not considered when traversing or mutating the array. 
// When the length is decreased, it removes the elements at the end of the array.
names.length = 6;

names;
// => ['Jack', 'Carlos', 'Paul', 'Sofia', empty × 2]

names.length = 2;
// =>  ['Jack', 'Carlos']

// Because arrays are objects, typeof names gives "object". 
// To check if something is an Array, use Array.isArray

typeof names;
// => "object"

Array.isArray(names);
// => true

const object = {};
Array.isArray(object);
// => false

// There are many methods for arrays in JS... check the official docs
