// # Hamming

// Calculate the Hamming Distance between two DNA strands.

// Your body is made up of cells that contain DNA. 
// Those cells regularly wear out and need replacing,
// which they achieve by dividing into daughter cells.
// In fact, the average human body experiences about 10 quadrillion cell divisions in a lifetime!

// When cells divide, their DNA replicates too.
// Sometimes during this process mistakes happen
// and single pieces of DNA get encoded with the incorrect information.
// If we compare two strands of DNA and count the differences between them we can see how many mistakes occurred.
// This is known as the "Hamming Distance".

// We read DNA using the letters C,A,G and T. Two strands might look like this:

//     GAGCCTACTAACGGGAT
//     CATCGTAATGACGGCCT
//     ^ ^ ^  ^ ^    ^^

// They have 7 differences, and therefore the Hamming Distance is 7.

// The Hamming Distance is useful for lots of things
// in science, not just biology, so it's a nice phrase to be familiar with :)

export const compute = (dna, dnaReplication) => {
    if(dna === '' && dnaReplication === '') { return 0; }
    if(dna === '') { throw new Error('left strand must not be empty'); }
    if(dnaReplication === '') { throw new Error('right strand must not be empty'); }
    if(dna.length > dnaReplication.length || dnaReplication.length > dna.length) { throw new Error('left and right strands must be of equal length'); }
  
  
    let distance = 0; 
    for(let i = 0; i < dna.length; i++){
      if(dna[i] !== dnaReplication[i]){
        distance++;
      }
    }
  
    return distance;
};