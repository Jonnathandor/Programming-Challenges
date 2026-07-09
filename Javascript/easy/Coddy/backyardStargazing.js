// Write a function planStargazingNight that takes guestCount, snacksPerGuest, and startTime and returns a formatted announcement string for your backyard astronomy event.

// The function calculates the total snack packs needed and creates a welcome message with the event details.

// Parameters:

// guestCount (number): Number of guests attending
// snacksPerGuest (number): Snack packs needed per guest
// startTime (string): Event start time
// Returns: A welcome announcement string. Format: Welcome to our stargazing night! We need [total] snack packs and the event starts at [startTime].

function planStargazingNight(guestCount, snacksPerGuest, startTime) {
    // Write code here
    let totalSnacks = snacksPerGuest * guestCount;
    return `Welcome to our stargazing night! We need ${totalSnacks} snack packs and the event starts at ${startTime}.`
}