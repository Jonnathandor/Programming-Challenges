// Your go functions can return multiple values.
// Most of the times a second return values is there to return an error

func GetCard() (Card, error) { ... }

card, err := GetCard()

if card, err := GetCard(); err != nil {
    // handle the error
}