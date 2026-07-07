// Create a function named anacondaReticle that receives name, length, color, and action as its parameters.

// The function simulates a camera's reticle viewfinder focusing on an anaconda in the rainforest for a nature documentary. It should return a formatted string that represents the camera's viewfinder display, combining the input details with some pre-set text to create a nature documentary-style description.

// Use string concatenation to combine the input parameters with fixed text to create the formatted output. This will help you practice basic string operations and variable usage in JavaScript.

// Parameters:

// name (string): The name given to the anaconda being filmed.
// length (string): The length of the anaconda in meters.
// color (string): The color of the anaconda.
// action (string): The current action of the anaconda.
// The function returns a string that represents the camera's viewfinder display.

// Here's an example of how the output should be formatted:

// [RETICLE ACTIVE]
// Subject: Anaconda
// Name: (name input)
// Length: (length input) meters
// Color: (color input)
// Activity: (action input)
// [RECORDING]

function anacondaReticle(name, length, color, action) {
    // Write code here
    return `[RETICLE ACTIVE]
Subject: Anaconda
Name: ${name}
Length: ${length} meters
Color: ${color}
Activity: ${action}
[RECORDING]`;
}