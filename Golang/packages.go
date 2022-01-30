// In Go an application is organized in packages. 
// A package is a collection of source files located in the same folder. 
// All source files in a folder must have the same package name at the top of the file. 
// By convention packages are named to be the same as the folder they are located in.

// Go provides an extensive standard library of packages which you can use in your program using the import keyword. 
// Standard library packages are imported using their name.

package greeting

import "fmt"

world := "World"
fmt.Sprintf("Hello %s", world)

// To make a function, type, variable, constant or struct field externally visible 
// (known as exported) the name must start with a capital letter. 

// Hello is a public function (callable from other packages)
func Hello(name string) string {
    return "Hello " + name
}
// hello is a private function (not callable from other packages)
func hello(name string) string {
    return "Hello " + name
}

