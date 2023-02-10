import java.time.LocalDate;
import java.time.LocalDateTime;

public class Gigasecond {
    private final long GIGASECOND = 1_000_000_000L;
    private LocalDateTime dateTime;
    public Gigasecond(LocalDate moment) {
        dateTime = moment.atStartOfDay();
    }

    public Gigasecond(LocalDateTime moment) {
        dateTime = moment;
    }

    public LocalDateTime getDateTime() {
        return dateTime.plusSeconds(GIGASECOND);
    }
}
