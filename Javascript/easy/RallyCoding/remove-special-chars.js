/* Problem: You are given a string that contains only characters and parenthesis as an argument.
 Return a string that has the parenthesis removed and contains only the characters. */
 const solve = (strArg) => {
    return strArg.replace(/[^0-9a-zA-Z]/g, '');
};

/* solve('(a)(b)((c))(((d)))')
> 'abcd' */
