For simplicity I am assuming that all
the characters in the unique string are from the ASCII
table

This is a very simple solution where we will use an array of booleans
We will loop the string passed to the function and for each character
we will check if the character is already there. If it is there we will return
false, indicating that the string has not unique characters.

Java is quite interesting arr['x'] is possible because in java the char
data type is a single 16 bit interger which means that java
will look for the numeric ASCII representation of 'x'.

```

boolean hasUniqueChars(String text){
    if(text.length() > 128) return false;

    boolean[] foundChars = new boolean[128];

    for(int i = 0; i < text.length(); i++){
        int currentChar = text.charAt(i);

        if(foundChars[currentChar]) return false;

        foundChars[currentChar] = true;
    }

    return true;
}

```
