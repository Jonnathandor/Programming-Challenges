export const encode = (text, depth) => {
  let encoded = '';
  let letters = {}
  let key = 1;
  let columns = text.length -1;
  let goesUp = false;

  for (let i = 1; i <= depth; i++) {
    letters[i] = '';
  }

  for (let i = 0; i <= columns; i++) {
    if(key < 1) {
      key += 2;
      goesUp = !goesUp
    }

    letters[key] += text[i];

    goesUp? key++ : key--;

    if(key > depth){
      key -= 2;
      goesUp = !goesUp;
    }
  }
  
  for (let i = 1; i <= Object.keys(letters).length; i++) {
    encoded += letters[i]
  }

  return encoded;
};
  
export const decode = () => {
  throw new Error('Remove this statement and implement this function');
};