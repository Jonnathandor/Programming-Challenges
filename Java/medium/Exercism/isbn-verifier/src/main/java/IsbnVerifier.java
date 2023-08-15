public class IsbnVerifier {

  /**
   * Verifies if the given ISBN string is valid.
   *
   * @param isbn The ISBN string to verify.
   * @return true if valid, false otherwise.
   */
  public boolean isValid(String isbn) {
    // Remove dashes from the ISBN string.
    isbn = isbn.replace("-", "");

    // Ensure the ISBN is 10 characters long.
    if (isbn.length() != 10)
      return false;

    int sum = 0;

    // Iterate over the first 9 characters, ensuring they're digits.
    for (int i = 0; i < 9; i++) {
      char c = isbn.charAt(i);

      // Check if the character is a digit.
      if (!Character.isDigit(c))
        return false;

      // Convert the character to its numerical value and add to the sum using
      // the formula.
      sum += Character.getNumericValue(c) * (10 - i);
    }

    // Handle the 10th character (which can be a digit or 'X').
    char lastChar = isbn.charAt(9);
    if (lastChar == 'X') {
      sum += 10;
    } else if (Character.isDigit(lastChar)) {
      sum += Character.getNumericValue(lastChar);
    } else {
      // If the 10th character is neither a digit nor 'X', return false.
      return false;
    }

    // Check if the computed sum is a multiple of 11 (mod 11 == 0).
    return sum % 11 == 0;
  }
}
