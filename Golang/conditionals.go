// The underlying type of any conditional operation is the bool type,
// which can have the value of true or false

// If statements can also include a short initialization statement
// that can be used to initialize one or more variables for the if statement.

num := 7
if v := 2 * num; v > 10 {
	fmt.Println(v)
} else {
	fmt.Println(num)
}
// Output: 14

// Note: any variables created in the
// initialization statement go out of scope
// after the end of the if statement.