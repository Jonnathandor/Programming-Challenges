export const encode = (text, depth) => {
  let encoded = '';
  let letters = {}
  let key = 1;
  let columns = text.length -1;

  for (let i = 1; i <= depth; i++) {
    letters[i] = '';
  }

  for (let i = 0; i <= columns; i++) {
    letters[key] += text[i];
    key++
    if(key > depth) key = 1;
  }
  
  for (let i = 1; i <= Object.keys(letters).length; i++) {
    encoded += letters[i]
  }

  return encoded;
};
  
export const decode = () => {
  throw new Error('Remove this statement and implement this function');
};