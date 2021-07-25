// # Protein Translation

// Translate RNA sequences into proteins.

// RNA can be broken into three nucleotide sequences called codons, and then translated to a polypeptide like so:

// RNA: `"AUGUUUUCU"` => translates to

// Codons: `"AUG", "UUU", "UCU"`
// => which become a polypeptide with the following sequence =>

// Protein: `"Methionine", "Phenylalanine", "Serine"`

// There are 64 codons which in turn correspond to 20 amino acids; however, all of the codon sequences and resulting amino acids are not important in this exercise.  If it works for one codon, the program should work for all of them.
// However, feel free to expand the list in the test suite to include them all.

// There are also three terminating codons (also known as 'STOP' codons); if any of these codons are encountered (by the ribosome), all translation ends and the protein is terminated.

// All subsequent codons after are ignored, like this:

// RNA: `"AUGUUUUCUUAAAUG"` =>

// Codons: `"AUG", "UUU", "UCU", "UAA", "AUG"` =>

// Protein: `"Methionine", "Phenylalanine", "Serine"`

// Note the stop codon `"UAA"` terminates the translation and the final methionine is not translated into the protein sequence.

// Below are the codons and resulting Amino Acids needed for the exercise.

// Codon                 | Protein
// :---                  | :---
// AUG                   | Methionine
// UUU, UUC              | Phenylalanine
// UUA, UUG              | Leucine
// UCU, UCC, UCA, UCG    | Serine
// UAU, UAC              | Tyrosine
// UGU, UGC              | Cysteine
// UGG                   | Tryptophan
// UAA, UAG, UGA         | STOP

// Learn more about [protein translation on Wikipedia](http://en.wikipedia.org/wiki/Translation_(biology))

// If an invalid character or codon is encountered _during_ translation, it should `throw` an error with the message `Invalid codon`.

export const translate = (rnaSequence = '') => {
    const codons = [];
    const mapping = createRnaMapping();
  
    for(let i = 0; i < rnaSequence.length; i += 3){
      codons.push(rnaSequence.substring(i, i+3));
    }
  
    const proteins = [];
    for(let codon of codons) {
      if(mapping.get(codon) === 'STOP'){
        break;
      } else if(mapping.has(codon)){
        proteins.push(mapping.get(codon));
      } else {
        throw new Error('Invalid codon');
      }
    }
  
    return proteins;
  };
  
  const createRnaMapping = () => {
    const mapping = new Map();
    mapping.set('AUG', 'Methionine');
    mapping.set('UUU', 'Phenylalanine');
    mapping.set('UUC', 'Phenylalanine');
    mapping.set('UUA', 'Leucine');
    mapping.set('UUG', 'Leucine');
    mapping.set('UCU', 'Serine');
    mapping.set('UCC', 'Serine');
    mapping.set('UCA', 'Serine');
    mapping.set('UCG', 'Serine');
    mapping.set('UAU', 'Tyrosine');
    mapping.set('UAC', 'Tyrosine');
    mapping.set('UGC', 'Cysteine');
    mapping.set('UGU', 'Cysteine');
    mapping.set('UGG', 'Tryptophan');
    mapping.set('UAA', 'STOP');
    mapping.set('UAG', 'STOP');
    mapping.set('UGA', 'STOP');
  
    return mapping;
};