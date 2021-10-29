// 1. Write a method called toMilesPerHour that has 1 parameter of type double 
// with the name kilometersPerHour. This method needs to return the rounded 
// value of the calculation of type long 

// If the parameter kilometersPerHour is less than 0, the method toMilesPerHour 
// needs to return -1 to indicte an invalid value. 

// Otherwise, if it is positive, calculate the value of miles per hour, round it 
// and return it.

// 2. Write another method called printConversion with 1 parameter of type double 
// with the name kilometersPerHour.abstract
// This method should not return anything and it needs to calculate milesPerHour 
// from the kilometersPerHour parameter.

// Then it needs to print a message "XX km/h = YY mi/h"

// XX represents the original value kilometersPerHour. 
// YY represents the rounded milesPerHour form the kilometersPerHour parameter. 

// if the parameter kilometersPerHour is < 0 then print the text "Invalid Value"
public class SpeedConverter {
    public static long toMilesPerHour(double kilometersPerHour){
        if(kilometersPerHour < 0) { return -1; }
        // Miles could be a constant but for some reason is being rejected so...
        // fixed value it is 
        return Math.round(kilometersPerHour / 1.609);
    }
    
    public static void printConversion(double kilometersPerHour){
        if(kilometersPerHour < 0) { 
            System.out.println("Invalid Value");
        } else {
            if(kilometersPerHour == 0){
                System.out.println(kilometersPerHour + " km/h = 0 mi/h");
            } else {
                System.out.println(kilometersPerHour + " km/h = " + toMilesPerHour(kilometersPerHour) + " mi/h");
            }
        }
    }
}
