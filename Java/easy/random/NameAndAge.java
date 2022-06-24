package easy.random;

import java.util.Scanner;

// Just asimple program that takes the input from 
// a user and prints the name and age of the user 
public class NameAndAge {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter yout year of birth: ");
        int yearOfBirth = scanner.nextInt();
        scanner.nextLine();

        System.out.println("Enter your name: ");
        String name = scanner.nextLine();
        int age = 2021 - yearOfBirth;

        System.out.println("Your name is " + name + ", and you are " + age + " years old.");

        scanner.close();
    }
}
