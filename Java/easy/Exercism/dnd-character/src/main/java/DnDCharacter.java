import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

public class DnDCharacter {

    // Attributes for the character's abilities
    private final int strength;
    private final int dexterity;
    private final int constitution;
    private final int intelligence;
    private final int wisdom;
    private final int charisma;

    // Constructor: Generates random values for each of the character's abilities
    public DnDCharacter() {
        strength = ability();
        dexterity = ability();
        constitution = ability();
        intelligence = ability();
        wisdom = ability();
        charisma = ability();
    }

    // Simulates the roll of a 6-sided die 4 times and returns the results as a list
    public List<Integer> rollDice() {
        Random random = new Random();
        List<Integer> rolls = new ArrayList<>(); // Create a new ArrayList
        for (int i = 0; i < 4; i++) {
            rolls.add(random.nextInt(6) + 1);
        }
        return rolls;
    }

    // Given a list of 4 dice rolls, this method discards the smallest value and sums the other three
    public int ability(List<Integer> rolls) {
        List<Integer> sortedScores = rolls.stream()
                .sorted()
                .collect(Collectors.toList());
        return sortedScores.get(1) + sortedScores.get(2) + sortedScores.get(3);
    }

    // Overloaded method: Rolls the dice and then calculates the ability score
    public int ability() {
        return ability(rollDice());
    }

    // Calculates the modifier for a given ability score using the provided formula
    public int modifier(int score) {
        return (int) Math.floor((score - 10) / 2.0); // Use Math.floor to always round down
    }

    // Getter methods for each of the character's abilities and hitpoints
    public int getStrength() {
        return strength;
    }

    public int getDexterity() {
        return dexterity;
    }

    public int getConstitution() {
        return constitution;
    }

    public int getIntelligence() {
        return intelligence;
    }

    public int getWisdom() {
        return wisdom;
    }

    public int getCharisma() {
        return charisma;
    }

    // Calculates and returns the character's hitpoints
    public int getHitpoints() {
        return 10 + modifier(getConstitution());
    }
}
