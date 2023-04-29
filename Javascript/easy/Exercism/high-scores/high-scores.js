export class HighScores {
  #input;
  constructor(input) {
    this.#input = input;
  }

  get scores() {
    return this.#input;
  }

  get latest() {
    return this.#input[this.#input.length -1];
  }

  get personalBest() {
    return Math.max(...this.#input);
  }

  get personalTopThree() {
    if(this.#input.length === 1) return this.scores 

    this.#input.sort((a, b) => b - a);

    if(this.#input.length <= 3) return this.scores;

    return this.#input.slice(0,3);
  }
}
