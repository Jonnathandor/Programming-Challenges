package blackjack

// ## Instructions

// In this exercise we will simulate the first turn of a [Blackjack](https://en.wikipedia.org/wiki/Blackjack) game.

// You will receive two cards and will be able to see the face up card of the dealer. All cards are represented using a string such as "ace", "king", "three", "two", etc. The values of each card are:

// | card  | value | card  | value |
// | :---: | :---: | :---: | :---: |
// |  ace  |  11   | eight |   8   |
// |  two  |   2   | nine  |   9   |
// | three |   3   |  ten  |  10   |
// | four  |   4   | jack  |  10   |
// | five  |   5   | queen |  10   |
// |  six  |   6   | king  |  10   |
// | seven |   7   | other |   0   |

// **Note**: Commonly, aces can take the value of 1 or 11 but for simplicity we will assume that they can only take the value of 11.

// Depending on your two cards and the card of the dealer, there is a strategy for the first turn of the game, in which you have the following options:

//     - Stand (S)
//     - Hit (H)
//     - Split (P)
//     - Automatically win (W)

// Although not optimal yet, you will follow the strategy your friend Alex has been developing, which is as follows:

// Category: Large Hand

// - If you have a pair of aces you must always split them.
// - If you have a Blackjack (two cards that sum up to a value of 21), and the dealer does not have an ace, a figure or a ten then you automatically win. If the dealer does have any of those cards then you'll have to stand and wait for the reveal of the other card.

// Category: Small Hand

// - If your cards sum up to 17 or higher you should always stand.
// - If your cards sum up to 11 or lower you should always hit.
// - If your cards sum up to a value within the range [12, 16] you should always stand unless the dealer has a 7 or higher, in which case you should always hit.

// ParseCard returns the integer value of a card following blackjack ruleset.
func ParseCard(card string) int {
	switch card {
	case "one":
		return 1
	case "two":
		return 2
	case "three":
		return 3
	case "four":
		return 4
	case "five":
		return 5
	case "six":
		return 6
	case "seven":
		return 7
	case "eight":
		return 8
	case "nine":
		return 9
	case "ace":
		return 11
	default:
		return 10
	}
}

// IsBlackjack returns true if the player has a blackjack, false otherwise.
func IsBlackjack(card1, card2 string) bool {
	return (ParseCard(card1) + ParseCard(card2)) == 21
}

// LargeHand implements the decision tree for hand scores larger than 20 points.
func LargeHand(isBlackjack bool, dealerScore int) string {
	if dealerScore >= 10 && isBlackjack {
		return "S"
	} else if isBlackjack && dealerScore < 10 {
		return "W"
	}

	return "P"
}

// SmallHand implements the decision tree for hand scores with less than 21 points.
func SmallHand(handScore, dealerScore int) string {
	if handScore >= 17 || ((handScore >= 12 && handScore <= 16) && dealerScore < 7) {
		return "S"
	}
	return "H"
}
