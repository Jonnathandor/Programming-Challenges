// # Rna Transcription

// Welcome to Rna Transcription on Exercism's TypeScript Track.
// If you need help running the tests or submitting your code, check out `HELP.md`.

// ## Instructions

// Given a DNA strand, return its RNA complement (per RNA transcription).

// Both DNA and RNA strands are a sequence of nucleotides.

// The four nucleotides found in DNA are adenine (**A**), cytosine (**C**),
// guanine (**G**) and thymine (**T**).

// The four nucleotides found in RNA are adenine (**A**), cytosine (**C**),
// guanine (**G**) and uracil (**U**).

// Given a DNA strand, its transcribed RNA strand is formed by replacing
// each nucleotide with its complement:

// - `G` -> `C`
// - `C` -> `G`
// - `T` -> `A`
// - `A` -> `U`

type DnaToRnaMap = {
    [key: string]: string
  }
  
export const DNATORNA: DnaToRnaMap = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U'
}
  
export function toRna(dnaStrand: string): string {
    if(/[^GCTA]/.test(dnaStrand)){ throw new Error("Invalid input DNA.") }
    if(dnaStrand.length === 1) { return DNATORNA[dnaStrand]; }
    let rna = '';
    for(let i = 0; i < dnaStrand.length; i++){
      rna += DNATORNA[dnaStrand[i]];
    }
  
    return rna;
}

// I had a conversation with bobahop... look at his beautiful code: 
// export const nuc_map: { [key: string]: string } = { 'G': 'C', 'C': 'G', 'T': 'A', 'A': 'U' }

// export function toRna(DNA: string): string {
//   return [...DNA].reduce((output, letter) => {
//     if (!(Object.keys(nuc_map).includes(letter))) throw Error('Invalid input DNA.')
//     output += nuc_map[letter]; return output
//   }, '')
// }

// https://exercism.org/tracks/typescript/exercises/rna-transcription/solutions/bobahop