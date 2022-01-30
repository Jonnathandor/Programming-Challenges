public class ForLoop {
// The for loop provides a mechanism to execute a group of statements repeatedly until some condition is met. The loop consists of four parts:

// for (initialization; test; update) {
//     body;
// }
// The initialization sets an initial state for the loop and is executed exactly once at the start of the loop. Typically it declares and assigns a variable used in the test expression and update statement. For example:

// int i = 1
// The test expression tests if the loop should end. If it evaluates to true, the body and then the update expression will be executed. If it evaluates to false, neither the body nor the update statement will be executed and execution resumes after the loop's closing bracket. Typically it checks the variable assigned in the initialization block. For example:

// i <= 10
// After executing the loop body, the update expression is executed. Typically it increments or decrements the loop variable by some value. For example:

// i++
// A for loop printing out the first four squares would look like this:

// for (int i = 1; i <= 4; i++) {
//     System.out.println("square of " + i + " is " + i * i);
// }
}
