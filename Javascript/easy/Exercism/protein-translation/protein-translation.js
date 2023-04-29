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
