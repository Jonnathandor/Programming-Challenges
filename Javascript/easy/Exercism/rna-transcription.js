// # RNA Transcription

// Given a DNA strand, return its RNA complement (per RNA transcription).

// Both DNA and RNA strands are a sequence of nucleotides.

// The four nucleotides found in DNA are adenine (**A**), cytosine (**C**),
// guanine (**G**) and thymine (**T**).

// The four nucleotides found in RNA are adenine (**A**), cytosine (**C**),
// guanine (**G**) and uracil (**U**).

// Given a DNA strand, its transcribed RNA strand is formed by replacing
// each nucleotide with its complement:

// * `G` -> `C`
// * `C` -> `G`
// * `T` -> `A`
// * `A` -> `U`

export const toRna = (dnaStrand) => {
    if(dnaStrand.length === 1) { return dnaToRna[dnaStrand]; }
    let rna = '';
    for(let i = 0; i < dnaStrand.length; i++){
      rna += dnaToRna[dnaStrand[i]];
    }
  
    return rna;
};
  
export const dnaToRna = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U'
}