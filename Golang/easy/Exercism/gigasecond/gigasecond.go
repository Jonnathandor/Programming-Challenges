// Package gigasecond implements a function for calculating a gigasecond
package gigasecond

// import path for the time package from the standard library
import (
	"time"
)

const Gigasecond = 1000000000

// AddGigaSecond adds a gigasecond to the passed time
func AddGigasecond(t time.Time) time.Time {
	return t.Add(time.Second * Gigasecond)
}
