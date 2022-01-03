// Package twofer contains the ShareWith function
package twofer

// Returns a message using a the "name" parameter if it exists.
// Otherwise, it returns a fixed message
func ShareWith(name string) string {
	if len(name) == 0 {
		name = "you"
	}

	return "One for " + name + ", one for me."
}
