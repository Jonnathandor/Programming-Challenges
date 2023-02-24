public class LogLevels {
    
    public static String message(String logLine) {
        String regex = "\\[.*\\]: ";
        System.out.println(logLine.replaceAll(regex, "").trim());
        return logLine.replaceAll(regex, "").trim();
    }

    public static String logLevel(String logLine) {
        return logLine.substring(1, logLine.indexOf("]")).toLowerCase();
    }

    public static String reformat(String logLine) {
        return message(logLine) + " " + "(" +logLevel(logLine) + ")";
    }
}
