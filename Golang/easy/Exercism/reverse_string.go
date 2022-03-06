package reverse

// Reverse a string

// For example:
// input: "cool"
// output: "looc"

func Reverse(input string) string {
	reversed := ""
	for _, v := range input {
		reversed = string(v) + reversed
	}
	return reversed
}
