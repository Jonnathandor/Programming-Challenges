import java.util.HashMap;
import java.util.Map;

public class NucleotideCounter {

    private Map<Character, Integer> nucleotideMap;

    public NucleotideCounter(String sequence) {
        nucleotideMap = new HashMap<>();
        nucleotideMap.put('A', 0);
        nucleotideMap.put('C', 0);
        nucleotideMap.put('G', 0);
        nucleotideMap.put('T', 0);

        for (char nucleotide : sequence.toCharArray()) {
            if (!nucleotideMap.containsKey(nucleotide)) {
                throw new IllegalArgumentException("Invalid nucleotide");
            }
            nucleotideMap.put(nucleotide, nucleotideMap.get(nucleotide) + 1);
        }
    }

    public Map<Character, Integer> nucleotideCounts() {
        return nucleotideMap;
    }
}

