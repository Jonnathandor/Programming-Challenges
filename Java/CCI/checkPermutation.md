Problem: Given two strings, write a method to decide if one is a
permutation of the other.

We want to be aware if the solution is case sensitive, are white spaces allowed?

god and dog have the same number of characters but the letters are on
different order so if we sort them we can compare the strings which
will result equal.

```
String sort(String s) {
    char[] content = s.toCharArray();
    java.util.Arrays.sort(content);
    return new String(content)
}

boolean isPermutation(String one, String two) {
    if(one.length() != two.length()) return false;

    return sort(one).equals(sort(two));
}

```
