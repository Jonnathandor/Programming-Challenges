import java.util.Arrays;
import java.util.stream.Collectors;

public class PigLatinTranslator {

    public String translate(String input) {
        // Rule 5: handle multiple word phrases
        if (input.contains(" ")) {
            return Arrays.stream(input.split(" "))
                    .map(this::translate)
                    .collect(Collectors.joining(" "));
        }

        // Rule 1: handle words starting with vowel sounds
        if(input.startsWith("a") || input.startsWith("e") || input.startsWith("i") ||
                input.startsWith("o") || input.startsWith("u") || input.startsWith("xr") ||
                input.startsWith("yt")) {
            return input + "ay";
        }

        // Rule 2, 3, and 4 combined
        int firstVowelIndex = findFirstVowelIndex(input);
        return input.substring(firstVowelIndex) + input.substring(0, firstVowelIndex) + "ay";
    }

    private int findFirstVowelIndex(String word) {
        for (int i = 0; i < word.length(); i++) {
            char currentChar = word.charAt(i);
            char nextChar = (i + 1 < word.length()) ? word.charAt(i + 1) : '\0';  // Use '\0' (null char) to represent no next character.

            // If currentChar is 'y', handle its edge case:
            if (currentChar == 'y') {
                // If 'y' is the second letter in a two-letter word or comes after a consonant
                if ((word.length() == 2 && i == 1) || (i > 0 && !isVowel(word.charAt(i - 1)))) {
                    return i;
                }
                continue;  // Skip this iteration and continue checking the next characters.
            }

            // If currentChar is 'q', handle the "qu" edge case:
            if (currentChar == 'q' && nextChar == 'u') {
                i++;  // Skip the 'u' character as it's treated like a consonant here.
                continue;  // Skip this iteration and continue checking the next characters.
            }

            // If it's a standard vowel:
            if (isVowel(currentChar)) {
                return i;
            }
        }

        return -1;  // Return -1 if no vowels are found (although for valid inputs this should not happen).
    }

    private boolean isVowel(char c) {
        return "aeiou".indexOf(Character.toLowerCase(c)) != -1;
    }
}