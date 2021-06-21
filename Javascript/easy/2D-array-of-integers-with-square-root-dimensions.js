// Given an integer K, return a 2D array of 
// integers with dimensions sqrt(K) X sqrt(K) 
// whose elements span the sequence from 1 to K.
// K will always have an integer square root (so K= 4, 9, 16, 25, etc)
// Ex: Given 9, return [ [1, 2, 3] [4, 5, 6] [7, 8, 9] ]

const solve = (k) => {
    const squareTable = [];
    const tableSide = Math.sqrt(k);
    let row = [];
    for(let i = 1; i <= k; i++){
      row.push(i);
      if(row.length === tableSide){
        squareTable.push(row);
        row = [];
      }
    }
    return squareTable;
};