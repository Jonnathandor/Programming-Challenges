public class Conditionals {
    // We have three logical operators
    // && (AND)
    // || (OR)
    // ! (NOT)

    // When it comes to conditionals, we always work with the boolean type. 
    // This force us to look for "true" or "false" values.

    // The idea of coditionals is to provide a flow control. If you you want
    // to execute an specific statement based on the result of a boolean you can use the 
    // if statement. 

    int val = 0; 
    if(val == 9){
        // some code here
    }

    // you can also have multiple statements
    if(val == 10) {
        // conditional code
    } else if(val == 17) {
        // conditional code
    } else {
        // executes when val is different from 10 and 17
    }

    // There is one more statement that could potentially
    // help you when it comes to control flows... the switch statement. 

    switch(val) {
        case 1:
            // conditional code
            break;
        case 2: case 3: case 4:
            // conditional code
            break;
        default:
            // if all cases fail
            break;
    }

}
