// Package gigasecond implements a function for calculating a gigasecond
package gigasecond

// import path for the time package from the standard library
import (
	"math"
	"time"
)

// AddGigaSecond adds a gigasecond to the passed time
func AddGigasecond(t time.Time) time.Time {
	return t.Add(time.Second * time.Duration(math.Pow10(9)))
}
