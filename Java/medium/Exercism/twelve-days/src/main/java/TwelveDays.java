public class TwelveDays {

    private static final String[] DAYS = {
            "first", "second", "third", "fourth", "fifth", "sixth",
            "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth"
    };

    private static final String[] GIFTS = {
            "a Partridge in a Pear Tree.",
            "two Turtle Doves",
            "three French Hens",
            "four Calling Birds",
            "five Gold Rings",
            "six Geese-a-Laying",
            "seven Swans-a-Swimming",
            "eight Maids-a-Milking",
            "nine Ladies Dancing",
            "ten Lords-a-Leaping",
            "eleven Pipers Piping",
            "twelve Drummers Drumming"
    };

    public String verse(int day) {
        StringBuilder verseBuilder = new StringBuilder();
        verseBuilder.append("On the ").append(DAYS[day - 1]).append(" day of Christmas my true love gave to me: ");

        for (int i = day; i >= 1; i--) {
            // Check if the current verse being constructed has items before the "two Turtle Doves"
            // and we're currently constructing the "two Turtle Doves" line.
            // If so, this line should end with ", and " to precede "a Partridge in a Pear Tree" correctly.
            if (i == 2 && day > 1) {
                verseBuilder.append(GIFTS[i - 1]).append(", and ");
            }
            // If it's the last line ("a Partridge in a Pear Tree"), just append it.
            else if (i == 1) {
                verseBuilder.append(GIFTS[i - 1]);
            }
            // For all other lines, simply add the gift followed by a comma.
            else {
                verseBuilder.append(GIFTS[i - 1]).append(", ");
            }
        }

        // Adding a newline to the end of our constructed verse.
        verseBuilder.append("\n");
        return verseBuilder.toString();
    }

    public String verses(int startDay, int endDay) {
        StringBuilder versesBuilder = new StringBuilder();
        for (int i = startDay; i <= endDay; i++) {
            versesBuilder.append(verse(i));

            // Only append a newline if it's not the last verse in the range
            if (i != endDay) {
                versesBuilder.append("\n");
            }
        }

        return versesBuilder.toString();
    }

    public String sing() {
        return verses(1, 12);
    }
}
