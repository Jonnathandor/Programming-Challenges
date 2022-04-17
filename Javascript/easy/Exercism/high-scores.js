// ## Instructions

// Manage a game player's High Score list.

// Your task is to build a high-score component of the classic Frogger game, one of the highest selling and addictive games of all time, and a classic of the arcade era. Your task is to write methods that return the highest score from the list, the last added score and the three highest scores.

// ## Source

// ### Created by

// - @PakkuDon

export class HighScores {
    #input;
    constructor(input) {
      this.#input = input;
    }
  
    get scores() {
      return this.#input;
    }
  
    get latest() {
      return this.#input[this.#input.length - 1];
    }
  
    get personalBest() {
      return Math.max(...this.#input);
    }
  
    get personalTopThree() {
      if(this.#input.length === 1) return this.#input;
  
      this.#input.sort((a, b) => b - a);
  
      if(this.#input.length <= 3) return this.#input;
  
      return this.#input.slice(0,3);
    }
  }