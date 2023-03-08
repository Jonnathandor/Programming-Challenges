export const transpose = (matrix) => {
  if(matrix.length === 0) return matrix;
  const longestLine = longestElement(matrix);
  const transposed = [];

  for (let i = 0; i < longestLine; i++) {
    let col = '';
    for (let j = 0; j < matrix.length; j++) {
      // i is greater than the length of the current "row" we do not want 
      // to add anything so we just break
      if(i >= longestElement(matrix.slice(j))) break;
      col += matrix[j][i] || ' ';
    }
    transposed.push(col);
  }

  return transposed;
};

const longestElement = (matrix) => Math.max(...(matrix.map(e => e.length)));
