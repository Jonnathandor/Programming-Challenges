// Package weather provides a function to print weather forecasts
package weather

var CurrentCondition string // The current weather condition
var CurrentLocation string  // The current location

// Forecast returns a string message with the weather of a location
func Forecast(city, condition string) string {
	CurrentLocation, CurrentCondition = city, condition
	return CurrentLocation + " - current weather condition: " + CurrentCondition
}
