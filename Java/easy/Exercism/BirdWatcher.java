package easy.Exercism;

public class BirdWatcher {
    private final int[] birdsPerDay;

    public BirdWatcher(int[] birdsPerDay) {
        this.birdsPerDay = birdsPerDay.clone();
    }

    public int[] getLastWeek() {
        return this.birdsPerDay;
    }

    public int getToday() {
        if(this.birdsPerDay.length == 0){ return 0; }
        return this.birdsPerDay[this.birdsPerDay.length - 1];
    }

    public void incrementTodaysCount() {
        this.birdsPerDay[this.birdsPerDay.length - 1] = this.getToday() + 1;
    }

    public boolean hasDayWithoutBirds() {
        System.out.println(java.util.Arrays.asList(this.birdsPerDay).contains(0));
        System.out.println(java.util.Arrays.toString(this.birdsPerDay));
        return java.util.Arrays.asList(this.birdsPerDay).contains(0);
    }

    public int getCountForFirstDays(int numberOfDays) {
        if(numberOfDays > 7) { numberOfDays = 7; }
        int count = 0;
        for (int i = 0; i < numberOfDays; i++) {
            count += this.birdsPerDay[i];
        }

        return count;
    }

    public int getBusyDays() {
        int busyDays = 0;
        for (int day: this.birdsPerDay) {
            if (day >= 5) {
                busyDays++;
            }
        }

        return busyDays;
    }
}
