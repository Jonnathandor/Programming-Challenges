import java.util.HashMap;
import java.util.Map;

class WordCount {
    public Map<String, Integer> phrase(String input) {
        Map<String, Integer> wordCount = new HashMap<>();

        // Normalize input and split into words
        String[] words = input.toLowerCase().trim().split("[^a-z0-9']+");

        // Count occurrences of each word
        for (String word : words) {
            // remove leading and trailing single quotes if they exist
            if (word.startsWith("'")) {
                word = word.substring(1);
            }
            if (word.endsWith("'")) {
                word = word.substring(0, word.length() - 1);
            }

            // Skip empty words
            if (word.isEmpty()) {
                continue;
            }

            if (wordCount.containsKey(word)) {
                wordCount.put(word, wordCount.get(word) + 1);
            } else {
                wordCount.put(word, 1);
            }
        }

        return wordCount;
    }
}
