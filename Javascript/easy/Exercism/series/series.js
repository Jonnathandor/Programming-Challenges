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
