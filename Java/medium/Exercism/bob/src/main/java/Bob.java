public class Bob {

    public String hey(String inputText) {
        // Trim input to remove leading and trailing white spaces
        inputText = inputText.trim();

        if (inputText.isEmpty()) {
            // If the inputText is empty or just whitespace
            return "Fine. Be that way!";
        } else if (isYelling(inputText) && isQuestion(inputText)) {
            // If inputText is in uppercase (yelling) and ends with "?"
            return "Calm down, I know what I'm doing!";
        } else if (isYelling(inputText)) {
            // If inputText is in uppercase (yelling)
            return "Whoa, chill out!";
        } else if (isQuestion(inputText)) {
            // If inputText ends with "?"
            return "Sure.";
        } else {
            return "Whatever.";
        }
    }

    private boolean isYelling(String inputText) {
        // Check if the string has letters and all of them are uppercase
        return !inputText.equals(inputText.toLowerCase()) && inputText.equals(inputText.toUpperCase());
    }

    private boolean isQuestion(String inputText) {
        // Check if the string ends with "?"
        return inputText.endsWith("?");
    }
}
