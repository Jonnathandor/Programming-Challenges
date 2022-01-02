// Go is a statically, compiled programming language and has three major
// language features:
// 1- Packages
// 2- Functions
// 3- Variables

// PACKAGES
// An application written in Go is organized in packages, and a packages is nothing else
// but a collection of files located in the same directory.
// All of these files share the same package name.

// Every time you import a package, you'll have access to all the entities
// whose names start with a capital letter. This is similar to the "export"
// keyword in javascript.

// VARIABLES
// As mentioned above Go is a statically-typed. This means that all variables
// must have a defined type when the program is compiled.

var explicitVariable int // This variable is declares its type in a explicit manner.

implicitVariable := 10 // Go recognizes the type of this variable implicitly.

// If you declare a variable with a specific tipe, you can reassign the value of that variable
// but the value must be of the same type... you cannot assign a boolean to a variable
// that was declared as a string.
word := "word"
word = "theWordHasBeenUpdated"
// word = false; // this will throw an error

// You can also declare constants in Go, in contrast with JS... you do not need to use
// SCREAMING_SNAKE_CASE... but this will depend of the compnay and coding style of the project.
const Age = 21 // this value is unmutable.

// FUNCTIONS
// Like in any other language, functions in go can accept zero or more parameters.
// Those parameters must be explicitly typed, you cannot use the variable trick of
// inference... you must be explicit when you declare those parameters. 
// Once you decide to invoke the function then you will have to pass an argument 
// for each parameter.

func Hello(name string) string {
	return "Hello " + name;
}
