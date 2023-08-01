import java.util.HashSet;
import java.util.Set;

class IsogramChecker {

    boolean isIsogram(String phrase) {
        // Convert the phrase to lower case, remove spaces and hyphens
        phrase = phrase.toLowerCase().replaceAll("[- ]", "");

        Set<Character> seenCharacters = new HashSet<>();
        for (char c : phrase.toCharArray()) {
            if (seenCharacters.contains(c)) {
                return false;
            }
            seenCharacters.add(c);
        }

        return true;
    }

}
