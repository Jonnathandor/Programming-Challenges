// # Difference Of Squares

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

export default class Squares {
    private maxNaturalNumber: number;

    constructor(naturalNumber: number){
        this.maxNaturalNumber = naturalNumber;
    }

    public get squareOfSum():number {
        let sum = 0;
        for(let i = 1; i <= this.maxNaturalNumber; i++){
            sum += i;
        }

        return Math.pow(sum,2);
    }

    public get difference(): number {
        return this.squareOfSum - this.sumOfSquares;
    }

    public get sumOfSquares():number {
        let sum = 0;
        for(let i = 1; i <= this.maxNaturalNumber; i++){
            sum += Math.pow(i, 2);
        }
        
        return sum;
    }
}