export const isArmstrongNumber = (number) => {
  const DIGITS = number.toString().split('');
  const POWER = DIGITS.length;
  let sumOfDigits = 0;

  for(let digit of DIGITS){
    sumOfDigits += Math.pow(Number(digit), POWER);
  }

  return sumOfDigits === number;
};
