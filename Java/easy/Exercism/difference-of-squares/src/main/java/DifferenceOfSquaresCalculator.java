class DifferenceOfSquaresCalculator {

    int computeSquareOfSumTo(int input) {
        if(input == 1) return 1;
        int sum = 0;
        for(int i = input; i > 0; i--){
            sum += i;
        }
        return (int)Math.pow(sum, 2);
    }

    int computeSumOfSquaresTo(int input) {
        if(input == 1) return 1;
        int sum = 0;
        for(int i = input; i > 0; i--){
            sum += Math.pow(i, 2);
        }

        return sum;
    }

    int computeDifferenceOfSquares(int input) {
        return this.computeSquareOfSumTo(input) - this.computeSumOfSquaresTo(input);
    }

}
