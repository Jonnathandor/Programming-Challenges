// You are given a lowercase string as an argument.
// Return true if each character in the string is
// shown an even number of times, false if not.


// const solve = (strArg) => {
//     const letters = strArg.split('');
//     const letterTable = {}
    
//     for(let letter of letters){
//       if(letterTable.hasOwnProperty(letter)){
//         letterTable[letter] += 1;
//       } else {
//         letterTable[letter] = 1;
//       }
//     }
    
//     for(let letterValue in letterTable){
//       if(letterTable[letterValue] % 2 !== 0){
//         return false;
//       }
//     }
  
//     return true;
// };

const solve = (strArg) => {
  const letters = strArg.split('');
  for(let letter of letters){
    let reg = new RegExp(`${letter}`,'g');
    let found = strArg.match(reg);
    if(found.length % 2 !== 0) return false;
  }

  return true;
};

// CODE BELOW IS NOT MINE, I FOUND IT ON INTERNET
// but definetly does the job better than my ideas
// let str = strArg.split("").sort();
// for(let i = 0; i < str.length; i+=2){
//   if(str[i] !== str[i+1]){
//     return false;
//   }
// }
// return true;

console.log(solve("aabbccdd"));
// > true

console.log(solve("abcdeffgg"));
// > false