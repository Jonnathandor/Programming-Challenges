// Values may be of different types. 

// Boolean, Number, String can be used as functions to convert a 
// value to the respective type. 

// With Boolean(value) you can convert any value to a boolean.
// Falsy values: false, 0, empty string, null, undefined, and Nan
// Out of the values mentioned above Boolean returns true. These values are called truthy.

Boolean(-1);
// => true

Boolean(0);
// => false

Boolean(' ');
// => true

Boolean('');
// => false

//////////////
// Number
// An empty string is converted to zero if you use Number
// If you try to convert a non-primitive value or a string that does not represent a number, the result is NaN

Number('  -12.34  ');
// => -12.34

Number('1,2');
// => NaN

Number('');
// => 0

Number({ num: 123 });
// => NaN


/////////////

String(12.34);
// => '12.34'

String(false);
// => 'false'

String(null);
// => 'null'

String(undefined);
// => 'undefined'


//For arrays, the String function will apply the string conversion for each element and join the results with a comma.
String([42, null, true, 'abc']);
// => '42,,true,abc'

String({ key: 'value' });
// => '[object Object]'

///////////

// Implicity conversions are called "type coercion"
// coercion: the practice of persuading someone to do something by using force or threats... lol

// Boolean Context
// If you use a non boolean in a boolean context then the rules of the Boolean function will be used
// to convert the value into a boolean

const num = 0;
if (num) {
  // this block is NOT executed because 0 is falsy
}
