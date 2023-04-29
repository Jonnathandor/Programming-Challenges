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
