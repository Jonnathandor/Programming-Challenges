class NeedForSpeed {
    private int battery = 100;
    private int speed;
    private int distanceDriven = 0;
    private int drained;

    public NeedForSpeed(int speed, int batteryDrain) {
        this.speed = speed;
        this.drained = batteryDrain;

    }

    public boolean batteryDrained() {
        return battery == 0 ? true:false;
    }

    public int distanceDriven() {
        return this.distanceDriven;
    }

    public void drive() {
        if(battery >= this.drained){
            this.distanceDriven += this.speed;
            this.battery -= drained;
        }

    }

    public static NeedForSpeed nitro() {
        return new NeedForSpeed(50, 4);
    }
}

class RaceTrack {
    private int distance;
    public RaceTrack(int distance){
        this.distance = distance;
    }

    public boolean tryFinishTrack(NeedForSpeed car) {
        while(!car.batteryDrained()){
            car.drive();
        }

        return car.distanceDriven() >= distance;
    }
}
