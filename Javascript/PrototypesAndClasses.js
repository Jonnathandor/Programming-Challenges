// When it comes to OOP you create object 
// also known as instances out of classes 
// and a class is nothing el but a template that states certain 
// functionality. 

// The data in the class is known as fields and the functions 
// that are part of the class are called methods. 

// JS has the class keyword but it is still considered a 
// prototyped based language. 

// When a function supports the creation of an object 
// then the function is called a constructor and it normally 
// starts with a capital letter. 

function Car() {
    // ...
}
  
const myCar = new Car();
const yourCar = new Car();

// a JavaScript function can have key/value pairs 
// because it is also an object behind the scenes.

// copy and pasted from Exercism because I could
// find a better way to explain it: https://exercism.org/tracks/javascript/concepts/classes

// To summarize:

// Constructors in JavaScript are regular functions.
// Constructing a new instance creates an object with a relation to its constructor called its prototype.
// Functions are objects (callable objects) and therefore they can have properties.
// The constructor's (function) prototype property will become the instance's prototype.

// When it comes to field properties, you can initialize them with the "this" keyword. 
// Iniside the contructor "this" represents the instance that will be created with that contructor 
// so we can created fields by adding "this" in the constructor

function Car(color, weight) {
    this.color = color;
    this.weight = weight;
    this.engineRunning = false;
  }
  
  const myCarTwo = new Car('red', '2mt');
  myCarTwo.color;
  // => 'red'
  myCarTwo.engineRunning;
  // => false

  // The prototype property allows you to add methods 
  // and you can access the fields inside those methods with the 
  // "this" 

  // When a function is called as a method of an object, its this is set to the object the method is called on.

  function Car() {
    this.engineRunning = false;
    // ...
  }
  
  Car.prototype.startEngine = function () {
    this.engineRunning = true;
  };
  
  Car.prototype.addGas = function (litre) {
    // ...
  };
  
  const myCarThree = new Car();
  myCarThree.startEngine();
  myCarThree.engineRunning;
  // => true


  // NEW WAY => Classes 

  class Car {
    constructor(color, weight) {
      this.color = color;
      this.weight = weight;
      this.engineRunning = false;
    }
  
    startEngine() {
      this.engineRunning = true;
    }
  
    addGas(litre) {
      // ...
    }
  }
  
  const myCarFour = new Car();
  myCarFour.startEngine();
  myCarFour.engineRunning;
  // => true

// By default, all instance fields are public in JavaScript.
// There is an established convention that fields and
// methods that start with an underscore should be treated as private.
class Car {
    constructor() {
      this._milage = 0;
    }
  
    get milage() {
      return this._milage;
    }
  
    set milage(value) {
      throw new Error(`Milage cannot be manipulated, ${value} is ignored.`);
      // Just an example, usually you would not provide a setter in this case.
    }
  }
  
  const myCarFive = new Car();
  myCarFive.milage;
  // => 0
  myCarFive.milage = 100;