package easy.Exercism;

// ## Instructions

// Your task is to convert a number into a string that contains raindrop sounds corresponding
// to certain potential factors. A factor is a number that evenly divides into another number, 
// leaving no remainder. The simplest way to test if a one number is a factor 
// of another is to use the [modulo operation](https://en.wikipedia.org/wiki/Modulo_operation).

// The rules of `raindrops` are that if a given number:

// - has 3 as a factor, add 'Pling' to the result.
// - has 5 as a factor, add 'Plang' to the result.
// - has 7 as a factor, add 'Plong' to the result.
// - _does not_ have any of 3, 5, or 7 as a factor, the result should be the digits of the number.

// ## Examples

// - 28 has 7 as a factor, but not 3 or 5, so the result would be "Plong".
// - 30 has both 3 and 5 as factors, but not 7, so the result would be "PlingPlang".
// - 34 is not factored by 3, 5, or 7, so the result would be "34".

public class Raindrops {
    String convert(int number) {
        StringBuilder strBuild = new StringBuilder();

        if (number % 3 == 0){
            strBuild.append("Pling");
        }

        if (number % 5 == 0){
            strBuild.append("Plang");
        }

        if (number % 7 == 0){
            strBuild.append("Plong");
        }

        if(strBuild.toString().isEmpty()){
            return String.valueOf(number);
        }

        return strBuild.toString();
    }
}
