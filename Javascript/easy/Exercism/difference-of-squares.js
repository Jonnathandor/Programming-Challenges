// ## Instructions

// Find the difference between the square of the sum and the sum of the squares of the first N natural numbers.

// The square of the sum of the first ten natural numbers is
// (1 + 2 + ... + 10)² = 55² = 3025.

// The sum of the squares of the first ten natural numbers is
// 1² + 2² + ... + 10² = 385.

// Hence the difference between the square of the sum of the first
// ten natural numbers and the sum of the squares of the first ten
// natural numbers is 3025 - 385 = 2640.

// You are not expected to discover an efficient solution to this yourself from
// first principles; research is allowed, indeed, encouraged. Finding the best
// algorithm for the problem is a key skill in software engineering.

// ## Source

// ### Created by

// - @matthewmorgan

export class Squares {
    constructor(number) {
      this._number = number
    }
  
    get sumOfSquares() {
      if(this._number === 1) return 1;
      let sum = 0;
      for (let i = this._number; i > 0; i--) {
        sum += i ** 2;
      }
  
      return sum;
    }
  
    get squareOfSum() {
      if(this._number === 1) return 1;
      let sum = 0;
      for (let i = this._number; i > 0; i--) {
        sum += i;
      }
  
      return sum ** 2;
    }
  
    get difference() {
      return this.squareOfSum - this.sumOfSquares;
    }
}