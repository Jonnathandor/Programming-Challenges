public class PhoneNumber {
    private String number;

    public PhoneNumber(String input) {
        String cleanedNumber = input.replaceAll("[^\\d]", "");

        // Check for letters or punctuations right after cleaning
        if (input.matches(".*[a-zA-Z].*")) {
            throw new IllegalArgumentException("letters not permitted");
        }

        if (input.matches(".*[@:!].*")) {
            throw new IllegalArgumentException("punctuations not permitted");
        }

        // Check for valid lengths and conditions associated with them
        if (cleanedNumber.length() == 11) {
            if (cleanedNumber.charAt(0) != '1') {
                throw new IllegalArgumentException("11 digits must start with 1");
            }
            cleanedNumber = cleanedNumber.substring(1); // Trim the '1' if it's valid
        } else if (cleanedNumber.length() < 10) {
            throw new IllegalArgumentException("incorrect number of digits");
        } else if (cleanedNumber.length() > 10) {
            throw new IllegalArgumentException("more than 11 digits");
        }

        // Area code and exchange code checks
        if (cleanedNumber.charAt(0) == '0') {
            throw new IllegalArgumentException("area code cannot start with zero");
        }
        if (cleanedNumber.charAt(0) == '1') {
            throw new IllegalArgumentException("area code cannot start with one");
        }

        if (cleanedNumber.charAt(3) == '0') {
            throw new IllegalArgumentException("exchange code cannot start with zero");
        }
        if (cleanedNumber.charAt(3) == '1') {
            throw new IllegalArgumentException("exchange code cannot start with one");
        }

        this.number = cleanedNumber;
    }

    public String getNumber() {
        return this.number;
    }
}
