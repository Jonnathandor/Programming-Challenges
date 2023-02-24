class SqueakyClean {
    static String clean(String identifier) {
        StringBuilder builder = new StringBuilder();

        for(int i = 0; i < identifier.length(); i++){
            char currentChar = identifier.charAt(i);

            if(currentChar >= 'α' && currentChar <= 'ω'){
                continue;
            }

            if(Character.isWhitespace(currentChar)){
                builder.append('_');
            }

            if(Character.isISOControl(currentChar)){
                builder.append("CTRL");
            }

            if(currentChar == '-') {
                builder.append(Character.toUpperCase(identifier.charAt(++i)));
            }

            if(Character.isLetter(currentChar)){
                builder.append(currentChar);
            }

        }
        return builder.toString();
    }
}
