// A structs is just a sequence of named elements that are known as fields.
// Each field has a name and type

// You create a new struct by using the type keyword and the built-in type struct,
// and explicitly define the name and type of the fields. For example, to define a Person struct:

type Person struct {
	name string
	age  int
}

person := Person{
	name: "John",
	age:  22,
}

// Update the age
person.age = 23
fmt.Printf("name: %s age: %d\n", person.name, person.age)
// Output: name: John age: 23