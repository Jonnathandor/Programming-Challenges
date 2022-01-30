package easy.Exercism;
// ## 1. Replace any spaces encountered with underscores

// Implement the (_static_) `SqueakyClean.clean()` method to replace any spaces with underscores. This also applies to leading and trailing spaces.

// ```java
// SqueakyClean.clean("my   Id");
// // => "my___Id"
// ```

// ## 2. Replace control characters with the upper case string "CTRL"

// Modify the (_static_) `SqueakyClean.clean()` method to replace control characters with the upper case string `"CTRL"`.

// ```java
// SqueakyClean.clean("my\0Id");
// // => "myCTRLId",
// ```

// ## 3. Convert kebab-case to camelCase

// Modify the (_static_) `SqueakyClean.clean()` method to convert kebab-case to camelCase.

// ```java
// SqueakyClean.clean("à-ḃç");
// // => "àḂç"
// ```

// ## 4. Omit Greek lower case letters

// Modify the (_static_) `SqueakyClean.clean()` method to omit any Greek letters in the range 'α' to 'ω'.

// ```java
// SqueakyClean.clean("MyΟβιεγτFinder");
// // => "MyΟFinder"
// ```
public class SqueakyClean {
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
