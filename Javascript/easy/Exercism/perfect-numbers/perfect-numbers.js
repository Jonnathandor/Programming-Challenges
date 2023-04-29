export const classify = (number) => {
  if(number <= 0){ throw new Error('Classification is only possible for natural numbers.');}
  const classification = {
    perfect: 'perfect',
    abundant: 'abundant',
    deficient: 'deficient'
  };

  let aliquotSum = 0;
  for(let i = 1; i < number; i++){
    if(number % i === 0){ aliquotSum += i }
  }

  if(aliquotSum === number){
    return classification.perfect;
  } else if(aliquotSum > number){
    return classification.abundant;
  } else {
    return classification.deficient;
  }
};
