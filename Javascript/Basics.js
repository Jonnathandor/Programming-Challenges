// JavaScript is known as a dynamic language. It contains a few primitives 
// but everything else is considered an object. 

// JavaScript is "cosidered" a scripting language that is mostly 
// used in the web pages, but Node is one non browser 
// environment that allows you to write backend cool stuff, like APIs. 

// VARIABLES 
// You can define variables in Javascript with: 
// const, let or var keyword. 
let myName = "Jonnathan"; // var or let use camelCase 
var age = 29;
const PI = 3.1416; // constants use SCREAMING_SNAKE_CASE
const ANOTHER_CONSTANT = "this value will not change";

// let and var are "dynamic" they can hold different values during
// their life cycle.

// const... is a constant, once its value is defined and binded it cannot be mutated. 

// As mentioned before constants make the binding immutable... once the value 
// is assigned then the constant is locked... but this rule only applies to primitive values. 
// If you are binding an object to the constant... the constant will always point to the same object
// ... but the values that the object holds ... this can actually be mutated. 
// You could potentially lock the entire object with Object.freeze ... but that is another conversation. 

// FUNCTIONS
// If you find yourselft writting the same code over and over again. 
// likely it is time to create a function. A function is nothing else than a group of statements 
// that achieve an specific goal. The functions can take parameters in order to make them dynamic 
// so they can operate with different values. If the function returns a value you will need to be specific
// and use the "return" keyword. If the functions does not return a value... then you have a "void" function
// this means that your functions does not return anything it just executes a few statements for a specific goal. 

// You can declare a functions like this
function add(numberOne, numberTwo){
    return numberOne + numberTwo;
}

// or like this 
const substract = (numberOne, numberTwo) => {
    return numberOne - numberTwo;
}

// The idea is to group functions in the same file if the are meant to be in the 
// same file, for example it would make sense to call a file "SimpleMath.js" that contains 
// the functions declared above.

// JAVASCRIPT MODULES
// The more complexity comes into a project the more code you will need and having all your code in 
// one single file would not make sense. It is better to chop down your program into different files 
// that hold a specific functions (like the SimpleMath.js example). But if the functions are in different files
// how on earth are they going to work together?? 
// This is is where the "import" and "export" come to the rescue. 
// You can select what code is exposed to other files and what code is imported from other files 

export const EXPORT_THIS_CONSTANT = 100; // any other js file that has access to this one is capable now to see this value
// so from another file you would import it like: 

// import EXPORT_THIS_CONSTANT from '...thePathToTheFile/Basics.js'


