class ResistorColor {
    int colorCode(String color) {
        return java.util.Arrays.asList(colors()).indexOf(color);
    }

    String[] colors() {
        String[] COLORS = {"black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"};
        return COLORS;
    }
}
