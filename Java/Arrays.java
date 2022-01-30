public class Arrays {
    // In Java, data structures that can hold zero or more elements
    // are known as collections. An array is a collection that has
    // a fixed size and whose elements must all be of the same type. 
    // Elements can be assigned to an array or retrieved from it using an index. 

    //type[] variableName = new type[size];

    // The type is the type of elements in the array 
    // which may be a primitive type (e.g. int) or a class (e.g. String).

    // The size is the number of elements this array 
    // will hold (which cannot be changed later). 
    // After array creation, the elements are initialized to their 
    // default values (typically 0, false or null).

    // Declare array with explicit size (size is 2)
    int[] twoInts = new int[2];
    // Arrays can also be defined using a shortcut notation
    // that allows you to both create the array and set its value:

    // Two equivalent ways to declare and initialize an array (size is 3)
    int[] threeIntsV1 = new int[] { 4, 9, 7 };
    int[] threeIntsV2 = { 4, 9, 7 };
    // As the compiler can now tell how many elements the array will have, 
    // the length can be omitted.

    
}
