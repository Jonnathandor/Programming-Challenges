export const encode = (text, depth) => {
  let encoded = '';
  let letters = buildLetterMap({}, depth)
  letters = populateLetterMap(text.length -1, 1, false, depth, letters, text);

  for (let i = 1; i <= depth; i++) {
    encoded += letters[i]
  }

  return encoded;
};



export const decode = (text, depth) => {

  // This advice was given by the user Promod, the code developed by me
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
  let offset = 0;
  let decodedRows = {}

  for (let i = 1; i <= depth; i++) {
    decodedRows[i] = text.slice(offset, offset + letters[i].length);
    offset = offset + letters[i].length;
  }

  console.log(buildMessageFromDecodedRows({...decodedRows}, text.length, depth));

  return buildMessageFromDecodedRows(decodedRows, text.length, depth);
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

// The function below was developed by my Friend Swann Lenik:
// This function is working like this:
// 3 parameters:
// decodedRows
// length
// depth
// 3 variables created:
// i - integer: used to know what index of decodedRows array to use - instantiated at 1, as we are using the first decoded row at the beginning and is always between 1 and depth.
// isGoingDown - boolean: True if we are going from 1 to the depth, false if going from depth to 1 - instantiated at True as we are going from 1 to depth.
// message - string: The message correctly decoded - empty at the beginning.
// In the while loop - while length of message is NOT GREATER THAN length:
// We take the FIRST CHARACTER of the decodedRows[i] string
// The slice function REMOVE the first character of decodedRows[i] string
// If we are going down, I add 1 to i. Otherwise I subtract 1.
// If i is EQUAL TO 0 or EQUAL TO (depth + 1)
// I reset value of i to correct value
// I change the value of goingDown to its opposite value
// I return the message correctly decoded.
const buildMessageFromDecodedRows = (decodedRows, length, depth) => {
  let i = 1;
  let isGoingDown = true;
  let message = '';

	while (message.length < length) {
    message += decodedRows[i][0];
    decodedRows[i] = decodedRows[i].slice(1);
    i += isGoingDown ? 1 : -1;
    if (i === 0 || i > depth) {
      i = isGoingDown ? depth - 1: 2;
      isGoingDown = !isGoingDown;
    }
  }
  
  return message;
};
