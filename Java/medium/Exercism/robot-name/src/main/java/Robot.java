import java.util.HashSet;
import java.util.Random;
import java.util.Set;

public class Robot {
    private static final Random rand = new Random();
    private static final Set<String> names = new HashSet<>();
    private String name;

    public Robot() {
        do {
            name = generateRandomName();
        } while (names.contains(name));
        names.add(name);
    }

    public String getName() {
        return name;
    }

    public void reset() {
        String newName;
        do {
            newName = generateRandomName();
        } while (names.contains(newName));
        names.remove(name); // remove old name if exist
        name = newName;
        names.add(newName); // add new name
    }

    private String generateRandomName() {
        return String.format("%c%c%03d",
                randCharacter(), randCharacter(), rand.nextInt(1000));
    }

    private char randCharacter() {
        return (char) ('A' + rand.nextInt(26));
    }
}