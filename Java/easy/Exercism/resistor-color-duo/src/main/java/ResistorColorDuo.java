class ResistorColorDuo {
    int value(String[] colors) {
        String[] COLORS = {"black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"};
        int resistanceValue = 0;

        for (int i = 0; i < 2; i++) {
            if(i == 0) {
                resistanceValue += java.util.Arrays.asList(COLORS).indexOf(colors[i]) * 10;
            } else {
                resistanceValue += java.util.Arrays.asList(COLORS).indexOf(colors[i]);
            }
        }

        return resistanceValue;
    }
}
