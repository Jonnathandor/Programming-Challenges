// We can represent numeric types such as integers or floatig point values
// Howe;ver we can also use specific types depending on the size of the value
// required and the architecture where the program is running (32-bit and 64-bit).

// The arimetic operators: of +, -, *, / and % are fully supported by Go.

// In contrast with JS you can only perform operations between the same
// type of numbers, if you are planning to perform operations with different type
// of numbers then you will have to convert them into the same type

var x int = 42
f := float64(x)

fmt.Printf("x is of type: %s\n", reflect.TypeOf(x))
// Output: x is of type: int

fmt.Printf("f is of type: %s\n", reflect.TypeOf(f))
// Output: f is of type: float64