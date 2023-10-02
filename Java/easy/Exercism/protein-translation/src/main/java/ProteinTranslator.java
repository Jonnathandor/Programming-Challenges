import java.util.*;

public class ProteinTranslator {

    private static final Map<String, String> CODON_TO_PROTEIN = new HashMap<>();
    static {
        CODON_TO_PROTEIN.put("AUG", "Methionine");
        CODON_TO_PROTEIN.put("UUU", "Phenylalanine");
        CODON_TO_PROTEIN.put("UUC", "Phenylalanine");
        CODON_TO_PROTEIN.put("UUA", "Leucine");
        CODON_TO_PROTEIN.put("UUG", "Leucine");
        CODON_TO_PROTEIN.put("UCU", "Serine");
        CODON_TO_PROTEIN.put("UCC", "Serine");
        CODON_TO_PROTEIN.put("UCA", "Serine");
        CODON_TO_PROTEIN.put("UCG", "Serine");
        CODON_TO_PROTEIN.put("UAU", "Tyrosine");
        CODON_TO_PROTEIN.put("UAC", "Tyrosine");
        CODON_TO_PROTEIN.put("UGU", "Cysteine");
        CODON_TO_PROTEIN.put("UGC", "Cysteine");
        CODON_TO_PROTEIN.put("UGG", "Tryptophan");
        CODON_TO_PROTEIN.put("UAA", "STOP");
        CODON_TO_PROTEIN.put("UAG", "STOP");
        CODON_TO_PROTEIN.put("UGA", "STOP");
    }

    public List<String> translate(String rna) {
        List<String> proteins = new ArrayList<>();

        for (int i = 0; i < rna.length(); i += 3) {
            String codon = rna.substring(i, i + 3);
            String protein = CODON_TO_PROTEIN.get(codon);

            if ("STOP".equals(protein)) {
                break;
            }

            proteins.add(protein);
        }

        return proteins;
    }
}
