public class CarsAssemble {
    final static int PRODUCTION_BASE_RATE = 221;

    public double productionRatePerHour(int speed) {
        if(speed == 0) {
            return 0;
        }
        else if(speed < 5){
            return speed * PRODUCTION_BASE_RATE;
        }
        else if(speed < 9){
            return this.productionCalculator(speed, PRODUCTION_BASE_RATE, .9);
        }
        else if(speed < 10){
            return this.productionCalculator(speed, PRODUCTION_BASE_RATE, .8);
        }

        return this.productionCalculator(speed, PRODUCTION_BASE_RATE, .77);
    }

    public int workingItemsPerMinute(int speed) {
        return (int)this.productionRatePerHour(speed) / 60;
    }

    private double productionCalculator(int speed, int baseRate, double percentage) {
        return speed * baseRate * percentage;
    }
}
