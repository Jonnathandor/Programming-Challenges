// A Set is a structure with unique values
// those values can be primitives or objects.
// However the elements of the set are not availalble 
// via indexes, you need to use the set method to fetch the values.

const set = new Set();
const object = { color: 'lime green' };
const functionallyIdenticalObject = { color: 'lime green' };

set.add(object);
set.add('wow');
set.add(77);

console.log(set.size);
//=> 3

set.add(functionallyIdenticalObject); // added because functionallyIdenticalObject is not strictly equal to object
console.log(set.size);
//=> 4

set.add(77); // not added because 77 is strictly equal to 77
console.log(set.size);
//=> 4