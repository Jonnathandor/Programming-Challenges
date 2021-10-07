// ## The goal

// We're going to extract some Scrabble scores from a legacy system.

// The old system stored a list of letters per score:

// - 1 point: "A", "E", "I", "O", "U", "L", "N", "R", "S", "T",
// - 2 points: "D", "G",
// - 3 points: "B", "C", "M", "P",
// - 4 points: "F", "H", "V", "W", "Y",
// - 5 points: "K",
// - 8 points: "J", "X",
// - 10 points: "Q", "Z",

// The shiny new Scrabble system instead stores the score per letter, which
// makes it much faster and easier to calculate the score for a word. It
// also stores the letters in lower-case regardless of the case of the
// input letters:

// - "a" is worth 1 point.
// - "b" is worth 3 points.
// - "c" is worth 3 points.
// - "d" is worth 2 points.
// - Etc.

// Your mission, should you choose to accept it, is to transform the legacy data
// format to the shiny new format.

// test('multiple scores with differing numbers of letters', () => {
//     const old = {
//       1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
//       2: ['D', 'G'],
//       3: ['B', 'C', 'M', 'P'],
//       4: ['F', 'H', 'V', 'W', 'Y'],
//       5: ['K'],
//       8: ['J', 'X'],
//       10: ['Q', 'Z'],
//     };
//     const expected = {
//       a: 1,
//       b: 3,
//       c: 3,
//       d: 2,
//       e: 1,
//       f: 4,
//       g: 2,
//       h: 4,
//       i: 1,
//       j: 8,
//       k: 5,
//       l: 1,
//       m: 3,
//       n: 1,
//       o: 1,
//       p: 3,
//       q: 10,
//       r: 1,
//       s: 1,
//       t: 1,
//       u: 1,
//       v: 4,
//       w: 4,
//       x: 8,
//       y: 4,
//       z: 10,
//     };

//     expect(transform(old)).toEqual(expected);
//   });

export const transform = (old) => {
    const NEW = {}
    for(const POINTS in old){
      for(const LETTER of old[POINTS]){
        NEW[LETTER.toLowerCase()] = Number(POINTS);
      }
    }
    return NEW;
};