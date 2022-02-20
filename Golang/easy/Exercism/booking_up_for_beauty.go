package booking

// ## Instructions

// In this exercise you'll be working on an appointment scheduler for a beauty salon that opened on September 15th in 2012.

// You have five tasks, which will all involve appointment dates.

// ## 1. Parse appointment date

// Implement the `Schedule` function to parse a textual representation of an appointment date into the corresponding `time.Time` format:

// ```go
// Schedule("7/25/2019 13:45:00")
// // Output: 2019-07-25 13:45:00 +0000 UTC
// ```

// ## 2. Check if an appointment has already passed

// Implement the `HasPassed` function that takes an appointment date and checks if the appointment was somewhere in the past:

// ```go
// HasPassed("July 25, 2019 13:45:00")
// // Output: true
// ```

// ## 3. Check if appointment is in the afternoon

// Implement the `IsAfternoonAppointment` function that takes an appointment date and checks if the appointment is in the afternoon (>= 12:00 and < 18:00):

// ```go
// IsAfternoonAppointment("Thursday, July 25, 2019 13:45:00")
// // Output: true
// ```

// ## 4. Describe the time and date of the appointment

// Implement the `Description` function that takes an appointment date and returns a description of that date and time:

// ```go
// Description("7/25/2019 13:45:00")
// // Output: "You have an appointment on Thursday, July 25, 2019, at 13:45."
// ```

// ## 5. Return the anniversary date of the salon's opening

// Implement the `AnniversaryDate` function that returns the anniversary date of the salon's opening for the current year in UTC.

// Assuming the current year is 2020:

// ```go
// AnniversaryDate()

// // Output: 2020-09-15 00:00:00 +0000 UTC
// ```

import (
	"time"
)

// Schedule returns a time.Time from a string containing a date
func Schedule(date string) time.Time {
	time, err := time.Parse("1/2/2006 15:04:05", date)
	if err != nil {
		panic(err)
	}
	return time
}

// HasPassed returns whether a date has passed
func HasPassed(date string) bool {
	appointment, err := time.Parse("January 2, 2006 15:04:05", date)
	if err != nil {
		panic(err)
	}
	return appointment.Before(time.Now())
}

// IsAfternoonAppointment returns whether a time is in the afternoon
func IsAfternoonAppointment(date string) bool {
	appointment, err := time.Parse("Monday, January 2, 2006 15:04:05", date)
	if err != nil {
		panic(err)
	}
	return appointment.Hour() >= 12 && appointment.Hour() < 18
}

// Description returns a formatted string of the appointment time
func Description(date string) string {
	appointment := Schedule(date)
	return "You have an appointment on " + appointment.Format("Monday, January 2, 2006, at 15:04.")
}

// AnniversaryDate returns a Time with this year's anniversary
func AnniversaryDate() time.Time {
	return time.Date(time.Now().Year(), time.September, 15, 0, 0, 0, 0, time.UTC)
}
