public class SquareRoot {

    public int squareRoot(int radicand) {
        if (radicand == 0 || radicand == 1) {
            return radicand;
        }

        double guess = radicand / 2.0;
        double previousGuess;

        do {
            previousGuess = guess;
            guess = (guess + radicand / guess) / 2;
        } while (Math.abs(guess - previousGuess) > 0.0001);

        return (int) Math.round(guess);
    }
}

