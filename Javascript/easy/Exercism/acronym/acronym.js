export const parse = (s) => {
  let acronym = '';
  const WORDS = s.replace(/[^a-zA-Z']+/g, ' ').split(' ');
  for(const WORD of WORDS){
    acronym += WORD[0].toUpperCase();
  }
  return acronym;
};