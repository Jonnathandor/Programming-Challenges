const encode = (text, depth) => {
  let encoded = '';
  let letters = buildLetterMap({}, depth)
  letters = populateLetterMap(text.length -1, 1, false, depth, letters, text);

  console.log(letters);
  
  for (let i = 1; i <= Object.keys(letters).length; i++) {
    encoded += letters[i]
  }

  console.log(encoded);

  return encoded;
};



const decode = (text, depth) => {

  // So in this case we will have the encoded string, I thought like 
  // If we can convert them to Map format similar to encode, It should be easy for us to decode from there.
  
  // since the encoded string is like row1+row2+row3 data, If 
  // we can find the length of each row we can slice them from the encoded string to map format.

  // For Example : this is the encoded text '(WECRLTE)(ERDSOEEFEAOC)(AIVDEN)' those brackets denote each row.

  // So the task is to identify the length of each row, so we can slice it of from the encoded string.

  // For this we can run buildLetterMap with the given encoded text 
  // so we will get a map again with { 1 : 'WLREAIN', 2 : 'ERTEDOEEOAVE', 3 : 'CESFCD' } 
  // from this we need need the length of each value (row) {1:7,2:12,3:6}

  //With this info and encoded text, we can form the original encode Map like first 7 
  //char are row 1 then from 7, next 12 char are row 2 then from 19 (7+12), next 6 char are row
  // with this we can loop the map, joining one char from each row and find the decoded text

  let letters = buildLetterMap({}, depth);
  letters = populateLetterMap(text.length -1, 1, false, depth, letters, text);
  const textChunks = [];
  let offset = 0;
  for (let i = 1; i <= Object.keys(letters).length; i++) {
    textChunks.push(text.slice(offset, offset + letters[i].length));
    offset = offset + letters[i].length;
  }
  console.log(letters);
  console.log(textChunks);
  return letters;
};

const buildLetterMap = (letters, depth) => {
  for (let i = 1; i <= depth; i++) {
    letters[i] = '';
  }
  return letters;
}

const populateLetterMap = (columns, key, goesUp, depth, letters, text) => {
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

  return letters;

}

encode('WEAREDISCOVEREDFLEEATONCE', 3);

decode('WECRLTEERDSOEEFEAOCAIVDEN', 3);