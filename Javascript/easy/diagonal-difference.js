// Given a square matrix, calculate the absolute difference
// between the sums of its diagonals.

// For example, the square matrix  is shown below:

// 1 2 3
// 4 5 6
// 9 8 9  

function diagonalDifference(arr) {
    let diagonalLeftToRight = 0;
    let diagonalRightToLeft = 0;
    for(let i = 0; i < arr.length; i++){
        diagonalLeftToRight += arr[i][i];
        diagonalRightToLeft += arr[i][arr.length-1-i]
    }
    
    return Math.abs(diagonalLeftToRight - diagonalRightToLeft)
}