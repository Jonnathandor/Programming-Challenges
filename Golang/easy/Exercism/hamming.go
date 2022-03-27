package hamming

import (
	"errors"
)

// ## Instructions

// Calculate the Hamming Distance between two DNA strands.

// Your body is made up of cells that contain DNA. Those cells regularly wear out and need replacing, which they achieve by dividing into daughter cells. In fact, the average human body experiences about 10 quadrillion cell divisions in a lifetime!

// When cells divide, their DNA replicates too. Sometimes during this process mistakes happen and single pieces of DNA get encoded with the incorrect information. If we compare two strands of DNA and count the differences between them we can see how many mistakes occurred. This is known as the "Hamming Distance".

// We read DNA using the letters C,A,G and T. Two strands might look like this:

//     GAGCCTACTAACGGGAT
//     CATCGTAATGACGGCCT
//     ^ ^ ^  ^ ^    ^^

// They have 7 differences, and therefore the Hamming Distance is 7.

// The Hamming Distance is useful for lots of things in science, not just biology, so it's a nice phrase to be familiar with :)

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