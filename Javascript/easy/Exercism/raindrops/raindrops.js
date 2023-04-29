export const convert = (num) => {
  let drop = ''
  
  if(num % 3 === 0){
    drop += 'Pling';
  } 

  if (num % 5 === 0){
    drop += 'Plang';
  }

  if (num % 7 === 0) {
    drop += 'Plong';
  } 

  if(drop.length === 0){
    return num.toString();
  }
  
  return drop;
};
