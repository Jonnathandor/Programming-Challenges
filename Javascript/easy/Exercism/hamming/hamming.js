export const compute = (dna, dnaReplication) => {
  if(dna === '' && dnaReplication === '') { return 0; }
  if(dna === '') { throw new Error('left strand must not be empty'); }
  if(dnaReplication === '') { throw new Error('right strand must not be empty'); }
  if(dna.length > dnaReplication.length || dnaReplication.length > dna.length) { throw new Error('left and right strands must be of equal length'); }

  /*dna.split(''): This line takes the dna string and splits it into an array of individual characters. For example,
  if dna was "ATCG", the result of this line would be ['A', 'T', 'C', 'G'].

  .reduce((distance, nucleotide, index): This line starts a reduce function that takes three arguments: distance, nucleotide, and index.

  distance is the accumulator, which will accumulate the number of differences between the dna and dnaReplication sequences.

  nucleotide is the current value in the dna array, which was created in step 1.

  index is the current index of the nucleotide in the dna array.

  nucleotide !== dnaReplication[index] ? distance + 1 : distance: 
  This line checks if the current nucleotide from the dna sequence
  is not equal to the character in the dnaReplication sequence at the same 
  index. If it is not equal, then distance + 1 is returned, otherwise, distance is returned.

  The reduce function then takes the returned value from 
  this line and sets it as the new value of distance for the next iteration of the loop.

  The reduce function continues to iterate 
  through the dna array until all values have been processed.

  0: This is the initial value for the distance accumulator.

  The final value of distance after the reduce function is complete is returned.*/

  return dna.split('').reduce((distance, nucleotide, index) => {
    return nucleotide !== dnaReplication[index] ? distance + 1 : distance;
  }, 0);
};
