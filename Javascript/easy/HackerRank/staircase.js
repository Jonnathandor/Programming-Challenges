// Task: Print a staircase of size  using # symbols and spaces.
// n = 4
//    #
//   ##
//  ###
// ####

// Base and heigth are the same as n
// peak = 3 spaces, 1# -> 3,1 -> spaces = n-1, # = n - spaces
// second row = 2 spaces, 2# -> 2,2
// third row = 1 space, 3# -> 1,3
// base row = 0 spaces, n# -> 0, 4

function buildStaircase(n){
    const SYMBOL = '#';
    const SPACE = ' ';
    let row = '';
    for(let i = 1; i <= n; i++){
        row = SPACE.repeat(n-i) + SYMBOL.repeat(i);
        console.log(row)
    }
}

buildStaircase(4);