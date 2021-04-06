/* Problem: You are given a string and an integer K as arguments.
 Return an array of strings that is K elements long,
where each element is the string that was provided. */

const solve = (strArg, k) => {
    let strArr = [];
    for(let i = 0; i < k; i++){
      strArr.push(strArg);
    }
    
    return strArr;
};

/* solve('Hi!', 3)
> ['Hi!', 'Hi!', 'Hi!'] */
