package easy.Exercism;

// ## Instructions

// Find the difference between the square of the sum and
// the sum of the squares of the first N natural numbers.

// The square of the sum of the first ten natural numbers is
// (1 + 2 + ... + 10)² = 55² = 3025.

// The sum of the squares of the first ten natural numbers is
// 1² + 2² + ... + 10² = 385.

// Hence the difference between the square of the sum of the first
// ten natural numbers and the sum of the squares of the first ten
// natural numbers is 3025 - 385 = 2640.

public class DifferenceOfSquaresCalculator {

    int computeSquareOfSumTo(int input) {
        if(input == 1) return 1;
        int sum = 0;
        for(int i = input; i > 0; i--){
            sum += i;
        }
        return (int)Math.pow(sum, 2);
    }

    int computeSumOfSquaresTo(int input) {
    }

    int computeDifferenceOfSquares(int input) {
    }

} 
