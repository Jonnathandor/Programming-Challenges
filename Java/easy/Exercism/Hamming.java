package easy.Exercism;

public class Hamming {
    private String leftStrand;
    private String rightStrand;
    public Hamming(String leftStrand, String rightStrand) {
        if(leftStrand.isEmpty() && rightStrand != ""){
            throw new IllegalArgumentException("left strand must not be empty.");
        } else if(leftStrand != "" && rightStrand.isEmpty()){
            throw new IllegalArgumentException("right strand must not be empty.");
        } else if(leftStrand.length() != rightStrand.length()){
            throw new IllegalArgumentException("leftStrand and rightStrand must be of equal length.");
        }
        this.leftStrand = leftStrand;
        this.rightStrand = rightStrand;
    }

    public int getHammingDistance() {
        int distance = 0;
        for (int i = 0; i < this.rightStrand.length(); i++){
            if(this.rightStrand.charAt(i) != this.leftStrand.charAt(i)){
                distance++;
            }
        }

        return distance;
    }
}
