// ## Instructions

// Determine if a number is perfect, abundant, or deficient based on
// Nicomachus' (60 - 120 CE) classification scheme for positive integers.

// The Greek mathematician [Nicomachus](https://en.wikipedia.org/wiki/Nicomachus) devised a classification scheme for positive integers, identifying each as belonging uniquely to the categories of **perfect**, **abundant**, or **deficient** based on their [aliquot sum](https://en.wikipedia.org/wiki/Aliquot_sum). The aliquot sum is defined as the sum of the factors of a number not including the number itself. For example, the aliquot sum of 15 is (1 + 3 + 5) = 9

// - **Perfect**: aliquot sum = number
//   - 6 is a perfect number because (1 + 2 + 3) = 6
//   - 28 is a perfect number because (1 + 2 + 4 + 7 + 14) = 28
// - **Abundant**: aliquot sum > number
//   - 12 is an abundant number because (1 + 2 + 3 + 4 + 6) = 16
//   - 24 is an abundant number because (1 + 2 + 3 + 4 + 6 + 8 + 12) = 36
// - **Deficient**: aliquot sum < number
//   - 8 is a deficient number because (1 + 2 + 4) = 7
//   - Prime numbers are deficient

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