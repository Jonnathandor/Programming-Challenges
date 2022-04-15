// If you are seeing a parent child relationship
// then you are literally talking about inheritance 
// This means that the child class have access to the 
// methods and fields defined by the parent. In some cases 
// the parent class is called superclass 

class Pet {
    constructor(name) {
      this.name = name;
    }
  
    introduce() {
      console.log(`This is my pet, ${this.name}.`);
    }
  }
  
//   class Dog extends Pet {}
  
//   const dog = new Dog('Otis');
//   dog.introduce();
  // => This is my pet, Otis.

  // In order to establish the parent-child 
  // relationship the child class will use the 
  // extends keyword which will create a connection 
  // through the prototype chain. 

// Dog.prototype.isPrototypeOf(dog); // => true
// Pet.prototype.isPrototypeOf(dog); // => true
// Pet.prototype.isPrototypeOf(Dog.prototype); // => true

// Pet.prototype.hasOwnProperty('introduce'); // => true
// Dog.prototype.hasOwnProperty('introduce'); // => false
// dog.hasOwnProperty('introduce'); // => false

// Constructor 
// If the child has not constructor then the parent constructor 
// is used. If the child has its own constructor 
// then the parent constructor must be explicitly called
// The child can invoke tha parent's constructor by using the 
// super keyword 
// class Pet {
//     constructor(name) {
//       this.name = name;
//     }
//   }
  
//   class Dog extends Pet {
//     constructor(name, breed) {
//       super(name);
//       this.breed = breed;
//     }
//   }
  
//   const dog = new Dog('Otis', 'Pug');

// Because the parent constructor is responsible for initializing a
// new object and assigning it to "this", it must be called before "this"
// is used by the child constructor.

// A child can have its own methods in addition to the ones
// found in the parent. 

// class Dog extends Pet {
//     constructor(name, breed) {
//       super(name);
//       this.breed = breed;
//     }
  
//     describe() {
//       console.log(`${this.name} is a ${this.breed}.`);
//     }
//   }
  
//   const dog = new Dog('Otis', 'Pug');
//   dog.introduce();
//   dog.describe();
//   // => 'This is my pet, Otis.'
//   // => 'Otis is a Pug.'

// If it is required a child can overrride the parent's method
class Cat extends Pet {
    // replacing parent class behavior
    introduce() {
      console.log(`This is my cat, ${this.name}.`);
    }
  }
  
  class Dog extends Pet {
    constructor(name, breed) {
      super(name);
      this.breed = breed;
    }
  
    describe() {
      console.log(`${this.name} is a ${this.breed}.`);
    }
  
    // extending parent class behavior
    introduce() {
      super.introduce();
      this.describe();
    }
  }
  
  const cat = new Cat('Milo');
  cat.introduce();
  // => 'This is my cat, Milo.'
  
  const dog = new Dog('Otis', 'Pug');
  dog.introduce();
  // => This is my pet, Otis.
  // => Otis is a Pug.




