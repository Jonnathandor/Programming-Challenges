//Problem:
/* You are given an integer N as an argument. 
Return a two dimensional array containing arrays 
of integers that make up a multiplication table from 1x1 to NxN. */


// My solution: 
/* n represents the size of the table, if n = 2 then
the table will have 2 levels(2x2). Each inner array represents
a level and its contents should be multiplied by its current level
for example: 

n = 2
[[1, 2],  level 1 -> 1*1, 1*2
[2, 4]]  level 2 -> 1*2, 2*2 */

const solve = (n) => {
    const outerArray = [];

    for(let i = 1; i <= n; i++){
        const innerArray = [];
        for(let j = 1; j <= n; j++){
        innerArray.push(i*j);
        }
        outerArray.push(innerArray);
    }

    return outerArray;
};

// output
console.log(solve(4))


/*   [[1, 2, 3, 4],
   [2, 4, 6, 8],
   [3, 6, 9, 12],
   [4, 8, 12, 16]] */

