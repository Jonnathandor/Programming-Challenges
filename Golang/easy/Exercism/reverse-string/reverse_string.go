package reverse

func Reverse(input string) string {
	if len(input) == 0 {
		return ""
	}
	runes := []rune(input)

	reversed := make([]rune, 0, cap(runes))
	for i := len(runes) - 1; i >= 0; i-- {
		reversed = append(reversed, runes[i])
	}

	return string(reversed)
}
