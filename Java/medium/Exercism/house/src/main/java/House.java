public class House {

    // A constant array storing the parts of the rhyme in the order they are introduced.
    private static final String[] LINES = {
            "the house that Jack built.",
            "the malt that lay in ",
            "the rat that ate ",
            "the cat that killed ",
            "the dog that worried ",
            "the cow with the crumpled horn that tossed ",
            "the maiden all forlorn that milked ",
            "the man all tattered and torn that kissed ",
            "the priest all shaven and shorn that married ",
            "the rooster that crowed in the morn that woke ",
            "the farmer sowing his corn that kept ",
            "the horse and the hound and the horn that belonged to "
    };

    /**
     * Generates a specific verse of the rhyme.
     *
     * @param verseNumber - The number of the verse to generate.
     * @return A string representing the verse.
     */
    public String verse(int verseNumber) {
        // Initializing a StringBuilder with the common starting phrase.
        StringBuilder verse = new StringBuilder("This is ");

        // Looping in reverse through the LINES array up to the verse number.
        // This constructs the verse in the correct order.
        for (int i = verseNumber - 1; i >= 0; i--) {
            verse.append(LINES[i]);
        }
        return verse.toString();
    }

    /**
     * Generates a set of verses from the startVerse to the endVerse.
     *
     * @param startVerse - The first verse number in the range.
     * @param endVerse   - The last verse number in the range.
     * @return A string representing the verses, separated by newlines.
     */
    public String verses(int startVerse, int endVerse) {
        StringBuilder verses = new StringBuilder();

        // Looping through the range of verses and appending each to the StringBuilder.
        // New verses are separated by a newline character.
        for (int i = startVerse; i <= endVerse; i++) {
            if (i != startVerse) verses.append("\n");
            verses.append(verse(i));
        }
        return verses.toString();
    }

    /**
     * Generates the entire rhyme from start to finish.
     *
     * @return A string representing the full rhyme.
     */
    public String sing() {
        // The entire rhyme is verses 1 through 12.
        return verses(1, 12);
    }
}
