export const encode = (text, depth) => {
  const letters = text.split('');
  if(depth === 2){
    // problem ... do I really wnat to use two filters?? 
    // this solution is only good with a dept of two
    return letters.filter((letter, i) => i % 2 === 0).join('') + letters.filter((letter, i) => i % 2 !== 0).join('');
  }
};
  
export const decode = () => {
  throw new Error('Remove this statement and implement this function');
};