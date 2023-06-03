package hamming

import (
	"errors"
)

// Distance calculates the hamming difference of two dna strands
func Distance(a, b string) (int, error) {
	if len(a) != len(b) {
		return 0, errors.New("the dna strands do not have the same length")
	}

	count := 0
	for i, v := range a {
		if v != rune(b[i]) {
			count++
		}
	}

	return count, nil
}
