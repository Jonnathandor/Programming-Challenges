import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

class HighScores {

    private List<Integer> scores;

    public HighScores(List<Integer> highScores) {
        this.scores = new ArrayList<>(highScores);
    }

    List<Integer> scores() {
        return this.scores;
    }

    Integer latest() {
        return this.scores.get(this.scores.size() - 1);
    }

    Integer personalBest() {
        return Collections.max(scores);
    }

    List<Integer> personalTopThree() {
        List<Integer> sortedScores = new ArrayList<>(scores);
        Collections.sort(sortedScores, Collections.reverseOrder());
        return sortedScores.subList(0, Math.min(3, sortedScores.size()));
    }

}
