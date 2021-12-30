package easy.Exercism;

public class LogLevels {
    public static String message(String logLine) {
        String regex = "\\B\\[ERROR\\]:|\\[WARNING\\]:|\\[INFO\\]:\\B";
        return logLine.replaceAll(regex, "").trim();
    }

    public static String logLevel(String logLine) {
        String log = "info";
        if(logLine.contains("ERROR")){
            log = "error";
        } else if(logLine.contains("WARNING")){
            log = "warning";
        }

        return log;
    }

    public static String reformat(String logLine) {
        throw new UnsupportedOperationException("Please implement the (static) LogLine.reformat() method");
    }
}
