public class RotationalCipher {

    // The shift key for the cipher
    private int shiftKey;

    // Constructor to initialize the shift key
    public RotationalCipher(int shiftKey) {
        this.shiftKey = shiftKey;
    }

    // Method to rotate the input string based on the shift key
    public String rotate(String input) {
        // StringBuilder to build the result string
        StringBuilder result = new StringBuilder();

        // Loop through each character in the input string
        for (char c : input.toCharArray()) {
            // Check if the character is an uppercase letter
            if (Character.isUpperCase(c)) {
                // Shift the character and append to the result
                result.append((char) ((c - 'A' + shiftKey) % 26 + 'A'));

                /*After performing the shifting and the modulus operation,
                the result is a number representing the position of
                the character in the alphabet,starting from 0 (0 for A, 1 for B, ..., 25 for Z).
                However, characters in a computer's memory are represented
                by ASCII values, not by their positions in the alphabet.*/
            }
            // Check if the character is a lowercase letter
            else if (Character.isLowerCase(c)) {
                // Shift the character and append to the result
                result.append((char) ((c - 'a' + shiftKey) % 26 + 'a'));
            }
            // If the character is not a letter, append it as is
            else {
                result.append(c);
            }
        }

        // Return the final result string
        return result.toString();
    }
}

