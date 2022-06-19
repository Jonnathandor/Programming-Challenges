package easy.Exercism;
// ## Instructions

// Write a function that returns the earned points in a single toss of a Darts game.

// [Darts](https://en.wikipedia.org/wiki/Darts) is a game where players
// throw darts to a [target](https://en.wikipedia.org/wiki/Darts#/media/File:Darts_in_a_dartboard.jpg).

// In our particular instance of the game, the target rewards with 4 different amounts of points, 
// depending on where the dart lands:

// * If the dart lands outside the target, player earns no points (0 points).
// * If the dart lands in the outer circle of the target, player earns 1 point.
// * If the dart lands in the middle circle of the target, player earns 5 points.
// * If the dart lands in the inner circle of the target, player earns 10 points.

// The outer circle has a radius of 10 units (This is equivalent to the total radius for the entire target),
// the middle circle a radius of 5 units, and the inner circle a radius of 1. Of course, 
// they are all centered to the same point (That is, the circles are [concentric](http://mathworld.wolfram.com/ConcentricCircles.html)) defined by the coordinates (0, 0).

// Write a function that given a point in the target 
// (defined by its `real` cartesian coordinates `x` and `y`), returns the correct amount earned by a dart 
// landing in that point.
import java.lang.Math;
class Darts {
    private double xAxis;
    private double yAxis;
    Darts(double x, double y) {
        this.xAxis = x;
        this.yAxis = y;
    }

    int score() {
        double distance = Math.hypot(xAxis, yAxis);
        if(distance <= 1) {
            return 10;
        } else if(distance <= 5){
            return 5;
        } else if(distance <= 10) {
            return 1;
        } else {
            return 0;
        }
    }

}