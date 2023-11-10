public class BottleSong {

    public String recite(int startBottles, int verses) {
        StringBuilder result = new StringBuilder();

        for (int i = 0; i < verses; i++) {
            int currentBottles = startBottles - i;
            String currentBottlesText = numberToWords(currentBottles).toLowerCase();
            String nextBottlesText = numberToWords(currentBottles - 1).toLowerCase();

            // Capitalize the first letter of the first word of each new line
            if (result.length() == 0 || result.charAt(result.length() - 1) == '\n') {
                currentBottlesText = capitalize(currentBottlesText);
            }

            // Construct the verse
            String verse = String.format("%s green bottle%s hanging on the wall,\n" +
                            "%s green bottle%s hanging on the wall,\n" +
                            "And if one green bottle should accidentally fall,\n" +
                            "There'll be %s green bottle%s hanging on the wall.\n",
                    currentBottlesText, currentBottles > 1 ? "s" : "",
                    currentBottlesText, currentBottles > 1 ? "s" : "",
                    nextBottlesText, (currentBottles - 1) != 1 ? "s" : "");

            result.append(verse);

            if (i < verses - 1) {
                result.append("\n");
            }
        }

        return result.toString();
    }

    private String numberToWords(int number) {
        // Handle the zero case explicitly
        if (number == 0) {
            return "no";
        }

        // Rest of the number to words mapping as before
        String[] words = {"", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"};
        return number > 0 && number < words.length ? words[number] : "";
    }

    private String capitalize(String text) {
        if (text == null || text.isEmpty()) {
            return text;
        }
        return Character.toUpperCase(text.charAt(0)) + text.substring(1);
    }
}
