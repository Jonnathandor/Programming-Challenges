public class BeerSong {

    public String sing(int start, int verses) {
        StringBuilder result = new StringBuilder();
        for (int i = 0; i < verses; i++) {
            result.append(verse(start - i)).append("\n");
        }
        return result.toString();
    }

    public String singSong() {
        return sing(99, 100);
    }

    private String verse(int n) {
        if (n == 0) {
            return "No more bottles of beer on the wall, no more bottles of beer.\n" +
                    "Go to the store and buy some more, 99 bottles of beer on the wall.\n";
        } else if (n == 1) {
            return "1 bottle of beer on the wall, 1 bottle of beer.\n" +
                    "Take it down and pass it around, no more bottles of beer on the wall.\n";
        } else if (n == 2) {
            return "2 bottles of beer on the wall, 2 bottles of beer.\n" +
                    "Take one down and pass it around, 1 bottle of beer on the wall.\n";
        } else {
            return String.format("%d bottles of beer on the wall, %d bottles of beer.\n" +
                    "Take one down and pass it around, %d bottles of beer on the wall.\n", n, n, n - 1);
        }
    }
}

