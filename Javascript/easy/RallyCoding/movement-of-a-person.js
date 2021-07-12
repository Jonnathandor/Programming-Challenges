// Problem: You are given an array containing
// strings of directions (up, down, left, right) as an argument.
// Imagine a person standing on a grid
// at point 0, 0. For each direction in the array of strings, 
// move your person in that direction on the grid.
// Return the final X,Y point that the person is
// standing at as an array of two integers.

const solve = (directions) => {
    let x = 0;
    let y = 0;
    for(let direction of directions){
      if(direction === 'up'){
        y += 1;
      } else if(direction === 'down'){
        y -= 1;
      } else if(direction === 'left'){
        x -= 1;
      } else {
        x +=1;
      }
    }
    return [x,y];
};

// solve(["up", "up", "down", "left", "left", "right", "up"])
// > [-1, 2]