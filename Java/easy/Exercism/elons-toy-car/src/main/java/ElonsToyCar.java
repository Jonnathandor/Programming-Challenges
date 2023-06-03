public class ElonsToyCar {
    private int distance;
    private int batteryCharge;

    public ElonsToyCar(){
        this.distance = 0;
        this.batteryCharge = 100;
    }

    public static ElonsToyCar buy() {
        return new ElonsToyCar();
    }

    public String distanceDisplay() {
        return String.format("Driven %d meters", this.distance);
    }

    public String batteryDisplay() {
        if (this.batteryCharge == 0){
            return "Battery empty";
        }
        return String.format("Battery at %d%%", this.batteryCharge);
    }

    public void drive() {
        if (this.batteryCharge > 0) { // only drive if battery is not empty
            this.distance += 20;
            this.batteryCharge -= 1;
        }
        else {
            this.batteryDisplay();
        }
    }
}
