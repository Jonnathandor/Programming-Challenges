export const encode = (characters) => {
  if(characters === '') { return ''; }

  let encoded = '';
  let counter = 1;
  for(let i = 0; i < characters.length; i++) {
    if(characters[i] === characters[i+1]){
      counter += 1;
    } else {
      if(counter > 1){
        encoded += counter;
        counter = 1;
      }
      encoded += characters[i];
    }
  }
  return encoded;
};

export const decode = (encoded) => {
  if(encoded === '') { return ''; }
  if(!encoded.match(/\d+/g)) { return encoded; }

  let decoded = '';
  let repeat = '';
  for(let i = 0; i < encoded.length; i++) {
    if(encoded[i].match(/\d/)){
      repeat += encoded[i];
    } else {
      if(repeat !== ''){
        decoded += encoded[i].repeat(parseInt(repeat));
        repeat = '';
      } else {
        decoded += encoded[i];
      }
    }
  }
  return decoded;
};
