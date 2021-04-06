/* Problem: You are given a string containing multiple newline characters \n and a positive integer K,
representing the line number, as arguments. Return the line of text at integer K.
Newline character should be omitted from the returned string */

const solve = (strArg, k) => {
/*     Splits the string into an array using the breakline 
    as the parameter for the split, then we make sure that
    we only keep strings with content (spaces included) */
    strArg = strArg.split('\n').filter(str => str.length > 0);
    
/*     k represents the first line of the string according to the
    problem but if we use an array then the first line
    is found on the zero index. So we deduct 1 from k
    to pull the right data from the array */
    return strArg[k-1];
};

/* solve("apples\nmilk\nbread\nfish\n", 2)
> "milk" */