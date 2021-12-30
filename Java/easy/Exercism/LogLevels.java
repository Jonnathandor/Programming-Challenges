package easy.Exercism;

// ## Instructions

// In this exercise you'll be processing log-lines.
// Each log line is a string formatted as follows: `"[<LEVEL>]: <MESSAGE>"`.

// There are three different log levels:

// - `INFO`
// - `WARNING`
// - `ERROR`

// You have three tasks, each of which will take a log line and ask you to do something with it.

// ## 1. Get message from a log line

// Implement the (_static_) `LogLevels.message()` method to return a log line's message:

// ```java
// LogLevels.message("[ERROR]: Invalid operation")
// // => "Invalid operation"
// ```

// Any leading or trailing white space should be removed:

// ```java
// LogLevels.message("[WARNING]:  Disk almost full\r\n")
// // => "Disk almost full"
// ```

// ## 2. Get log level from a log line

// Implement the (_static_) `LogLevels.logLevel()` method to return a log line's log level, which should be returned in lowercase:

// ```java
// LogLevels.logLevel("[ERROR]: Invalid operation")
// // => "error"
// ```

// ## 3. Reformat a log line

// Implement the (_static_) `LogLevels.reformat()` method that reformats the log line, putting the message first and the log level after it in parentheses:

// ```java
// LogLevels.reformat("[INFO]: Operation completed")
// // => "Operation completed (info)"
// ```
public class LogLevels {
    public static String message(String logLine) {
        String regex = "\\B\\[ERROR\\]:|\\[WARNING\\]:|\\[INFO\\]:\\B";
        return logLine.replaceAll(regex, "").trim();
    }

    public static String logLevel(String logLine) {
        // String log = "info";
        // if(logLine.contains("ERROR")){
        //     log = "error";
        // } else if(logLine.contains("WARNING")){
        //     log = "warning";
        // }

        // return log;

        return logLine.substring(1, logLine.indexOf("]")).toLowerCase();
    }

    public static String reformat(String logLine) {
        String[] words = logLine.split(" ");
        String code = " (info)";

        if(logLine.contains("ERROR")){
            code = " (error)";
        } else if(logLine.contains("WARNING")){
            code = " (warning)";
        }

        String log = "";
        for(int i = 1; i < words.length; i++){
            log += words[i] + " ";
        }

        return log.trim() + code;
    }
}
