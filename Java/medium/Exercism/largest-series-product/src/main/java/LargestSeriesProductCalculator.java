public class LargestSeriesProductCalculator {

    private final String input;

    public LargestSeriesProductCalculator(String input) {
        if (!input.chars().allMatch(Character::isDigit)) {
            throw new IllegalArgumentException("String to search may only contain digits.");
        }
        this.input = input;
    }

    public long calculateLargestProductForSeriesLength(int span) {
        // Validation
        if (span < 0) {
            throw new IllegalArgumentException("Series length must be non-negative.");
        }
        if (span > input.length()) {
            throw new IllegalArgumentException("Series length must be less than or equal to the length of the string to search.");
        }

        // Calculation
        long maxProduct = -1;  // Start with -1 since all products will be non-negative
        for (int i = 0; i <= input.length() - span; i++) {
            String currentSubstring = input.substring(i, i + span);
            long currentProduct = productOfDigits(currentSubstring);
            if (currentProduct > maxProduct) {
                maxProduct = currentProduct;
            }
        }
        return maxProduct;
    }

    private long productOfDigits(String substring) {
        long product = 1;
        for (char c : substring.toCharArray()) {
            int digit = Character.getNumericValue(c);
            product *= digit;
        }
        return product;
    }
}
