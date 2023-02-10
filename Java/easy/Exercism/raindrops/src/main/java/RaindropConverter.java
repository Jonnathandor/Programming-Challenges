class RaindropConverter {

    String convert(int number) {
        StringBuilder strBuild = new StringBuilder();

        if (number % 3 == 0){
            strBuild.append("Pling");
        }

        if (number % 5 == 0){
            strBuild.append("Plang");
        }

        if (number % 7 == 0){
            strBuild.append("Plong");
        }

        if(strBuild.toString().isEmpty()){
            return String.valueOf(number);
        }

        return strBuild.toString();
    }

}
