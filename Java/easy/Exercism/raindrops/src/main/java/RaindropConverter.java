class RaindropConverter {

    private static final StringBuilder strBuild = new StringBuilder();

    static {
        strBuild.setLength(0);
    }

    String convert(int number) {
        strBuild.setLength(0);
        if (number % 3 == 0){
            strBuild.append("Pling");
        }

        if (number % 5 == 0){
            strBuild.append("Plang");
        }

        if (number % 7 == 0){
            strBuild.append("Plong");
        }

        return strBuild.toString().isEmpty() ? String.valueOf(number) : strBuild.toString();
    }

}
