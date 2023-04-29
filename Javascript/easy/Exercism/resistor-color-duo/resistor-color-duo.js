export const decodedValue = (encoded) => {
  let resistanceValue = 0;
  resistanceValue += colorCode(encoded[0]) * 10; 
  resistanceValue += colorCode(encoded[1]);

  return resistanceValue;
};

const colorCode = (color) => {
  const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
  return COLORS.indexOf(color);
};
