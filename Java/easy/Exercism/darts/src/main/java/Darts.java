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
