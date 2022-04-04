// ## Instructions

// Given a string of digits, output all the contiguous substrings of length `n` in
// that string in the order that they appear.

// For example, the string "49142" has the following 3-digit series:

// - "491"
// - "914"
// - "142"

// And the following 4-digit series:

// - "4914"
// - "9142"

// And if you ask for a 6-digit series from a 5-digit string, you deserve
// whatever you get.

// Note that these series are only required to occupy _adjacent positions_
// in the input; the digits need not be _numerically consecutive_.

// ## Source

// ### Created by

// - @matthewmorgan

// ### Contributed to by

// - @ankorGH
// - @rchavarria
// - @ryanplusplus
// - @serixscorpio
// - @SleeplessByte
// - @tejasbubane
// - @xarxziux

// ### Based on

// A subset of the Problem 8 at Project Euler - http://projecteuler.net/problem=8
export class Series {
    #series = '';
    constructor(series) {
      if(series.length === 0){
        throw new Error('series cannot be empty');
      }
      this.#series = series;
    }
  
    slices(sliceLength) {
      this.#validateSlice(sliceLength);
      const slices = [];
      for (let i = 0; i + sliceLength - 1 < this.#series.length; i++) {
        let slice = this.#series.slice(i, i + sliceLength);
        slices.push(slice);
      }
  
      const singleSeries = slices.map(stringNumbers => stringNumbers.split('').map(Number))
  
      return singleSeries;
    }
  
    #validateSlice(slice){
      if(slice > this.#series.length){
        throw new Error('slice length cannot be greater than series length');
      } else if(slice === 0){
        throw new Error('slice length cannot be zero');
      } else if(slice < 0){
        throw new Error('slice length cannot be negative');
      }
    }
  }