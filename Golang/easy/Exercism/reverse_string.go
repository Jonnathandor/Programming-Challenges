package reverse

// Reverse a string

// For example:
// input: "cool"
// output: "looc"

func Reverse(input string) string {
	// 4123 ns/op
	// reversed := ""
	// for _, v := range input {
	// 	reversed = string(v) + reversed
	// }
	// return reversed

	//1167 ns/op
	if len(input) == 0 {
		return ""
	}
	runes := []rune(input)

	reversed := make([]rune, 0, cap(runes))
	for i := len(runes) - 1; i >= 0; i-- {
		reversed = append(reversed, []rune(input)[i])
	}

	return string(reversed)
}
