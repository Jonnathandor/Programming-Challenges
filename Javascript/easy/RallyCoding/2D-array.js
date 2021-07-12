// Problem: You are given a two dimensional array of integer pairs as an argument.
//  Each integer pair represents movement on the X-Y plane. Starting at (0,0),
//   apply each movement pair, then return the point that you end at.

const solve = (intArray) => {
    let x = 0;
    let y = 0;
    for(let points of intArray){
      x += points[0];
      y += points[1];
    }
    
    return [x,y];
};

// solve([[1, 0], [0,-3], [3,3]])
// > [4,0]

// 1. We start out at 0,0.
// 2. We apply the first point 1,0 and go to the right 1 on the X axis and stay at 0 for the Y axis.
// 3. We are now at points 1,0
// 4. Moving to the second point 0,-3 we don't move for the X axis and move down 3 for the Y axis.
// 5. We are now at points 1,-3
// 6. Moving to the last point 3,3 we move to the right 3 on the X axis and up 3 on the Y axis.
// 7. We are now at points 4,0 so we return \[4,0]

