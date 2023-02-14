export class Triangle {
  constructor(...sides) {
    this.sides = sides;
  }

  get isEquilateral() {
    if(this.sides.includes(0)) { return false; }
    return (this.sides[0] === this.sides[1]) && (this.sides[1] === this.sides[2]);
  }

  get isIsosceles() {
    const sortedSides = this.sides.sort((a,b) => a - b);
    if((sortedSides[2] - sortedSides[0]) > 1) { return false; }
    return (this.sides[0] === this.sides[1]) || (this.sides[1] === this.sides[2]) || (this.sides[0] === this.sides[2])
  }

  get isScalene() {
    if(this.isEquilateral || this.isIsosceles){ return false; }
    return this.sides[2] < Math.sqrt(Math.pow(this.sides[0], 2) + Math.pow(this.sides[1], 2));
  }
}
