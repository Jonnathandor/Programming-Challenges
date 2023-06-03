// Package twofer contains the ShareWith function
package twofer

// ShareWith prints a message with an argument provided by the user
// or prints a fixed messaged if no argument is provided.
func ShareWith(name string) string {
	if len(name) == 0 {
		name = "you"
	}

	return "One for " + name + ", one for me."
}
