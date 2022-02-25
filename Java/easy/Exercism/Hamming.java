package easy.Exercism;

public class Hamming {
    private int distance = 0;

    public Hamming(String leftStrand, String rightStrand) {
        validate(leftStrand, rightStrand);
        for (int i = 0; i < rightStrand.length(); i++){
            if(rightStrand.charAt(i) != leftStrand.charAt(i)){
                distance++;
            }
        }
    }

    public int getHammingDistance() {
        return this.distance;
    }

    private static void validate(String leftStrand, String rightStrand) {
        if(leftStrand.isEmpty() && !rightStrand.isEmpty()){
            throw new IllegalArgumentException("left strand must not be empty.");
        } else if(!leftStrand.isEmpty() && rightStrand.isEmpty()){
            throw new IllegalArgumentException("right strand must not be empty.");
        } else if(leftStrand.length() != rightStrand.length()){
            throw new IllegalArgumentException("leftStrand and rightStrand must be of equal length.");
        }
    }
}
