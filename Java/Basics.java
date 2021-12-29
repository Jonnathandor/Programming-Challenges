// In contrast with Javascript, Java is a statically-typed language 
// which means that everything will have a type during compilation. 

// Because Java is an object oriented lenguage
// this means that all the functions will beloung to a class.
public class Basics {

    // It is very important to mention that once you define 
    // a variable its type will never change. 
    // int explicitVar = 10; // This var is declared as an int

    // in the other hand... we can change the value...
    // explicitVar = 12;

    // When a function is declared inside a class we call them a method. 
    // They can have zero or more parameters... but it is very important 
    // to mention that all the parameters must be explicitly typed.
    // This is not javascript so there is no type inference for parameters. 
    // If for some reason we want to provide the ability to call a method 
    // from outside the class then the public access modifier must be added to the method. 
    public int add(int x, int y){
        return x + y;
    }

    // The class cna have different states but ... if the methods 
    // do not rely on the state of the class then they can be static. 
    // and.. if the class only contains static method then the class 
    // can also be static. 
}


