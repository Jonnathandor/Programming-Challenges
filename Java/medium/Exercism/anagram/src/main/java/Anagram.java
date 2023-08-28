import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class Anagram {
    private final String word;
    private final String canonicalForm;

    public Anagram(String word) {
        this.word = word;
        this.canonicalForm = canonicalize(word);
    }

    public List<String> match(List<String> candidates) {
        return candidates.stream()
                .filter(this::isAnagram)
                .collect(Collectors.toList());
    }

    private boolean isAnagram(String candidate) {
        return !word.equalsIgnoreCase(candidate) && canonicalize(candidate).equals(canonicalForm);
    }

    private String canonicalize(String input) {
        char[] chars = input.toLowerCase().toCharArray();
        Arrays.sort(chars);
        return new String(chars);
    }
}
