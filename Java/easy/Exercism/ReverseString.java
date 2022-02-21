package easy.Exercism;

class ReverseString {

    // Reverse a string

    // For example:
    // input: "cool"
    // output: "looc"
    String reverse(String inputString) {
        StringBuffer sbf = new StringBuffer(inputString);
        return sbf.reverse().toString();
    }
  
}