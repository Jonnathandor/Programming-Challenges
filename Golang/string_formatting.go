// Go provides an in-built package called fmt (format package) which offers
// a variety of functions to manipulate the format of input and output. 
// The most commonly used function is Sprintf, 
// which uses verbs like %s to interpolate values into a string and returns that string.
import "fmt"

food := "taco"
fmt.Sprintf("Bring me a %s", food)
// Returns: Bring me a taco

number := 4.3242
fmt.Sprintf("%.2f", number)
// Returns: 4.32