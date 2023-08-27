public class LuhnValidator {

    public boolean isValid(String input) {
        if (input == null || input.trim().isEmpty()) {
            return false;
        }

        String cleanInput = input.replaceAll(" ", "");

        if (cleanInput.length() <= 1) {
            return false;
        }

        if (!cleanInput.matches("\\d+")) {
            return false;
        }

        int sum = 0;
        boolean doubleNext = false;

        for (int i = cleanInput.length() - 1; i >= 0; i--) {
            int digit = Character.getNumericValue(cleanInput.charAt(i));

            if (doubleNext) {
                digit *= 2;
                if (digit > 9) {
                    digit -= 9;
                }
            }

            sum += digit;
            doubleNext = !doubleNext;
        }

        return sum % 10 == 0;
    }
}

