// Package weather provides a function to print weather forecasts.
package weather

// CurrentCondition represents the current weather condition.
var CurrentCondition string

// CurrentLocation represents the location where the weather is being forecasted.
var CurrentLocation string

// Forecast returns a string message with the weather of a location.
func Forecast(city, condition string) string {
	CurrentLocation, CurrentCondition = city, condition
	return CurrentLocation + " - current weather condition: " + CurrentCondition
}
