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
