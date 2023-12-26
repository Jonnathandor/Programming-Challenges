public class Markdown {
    private boolean inList = false;
    private StringBuilder resultBuilder = new StringBuilder();

    public String parse(String input){
        String[] lines = input.split("\n");

        for (String line : lines) {
            processLine(line);
        }

        closeUnfinishedList();

        return resultBuilder.toString();
    }

    private void processLine(String line){
        if(line.startsWith("* ")){
            processListItem(line);
        } else {
            if(inList){
                closeUnfinishedList();
            }

            if(line.startsWith("#")){
                processHeader(line);
            } else {
                resultBuilder.append("<p>").append(processText(line)).append("</p>");
            }
        }
    }

    private void processHeader(String line){
        int headerLevel = calculateHeaderLevel(line);
        String headerTag = "h" + headerLevel;
        resultBuilder.append("<").append(headerTag).append(">")
                .append(processText(line.substring(headerLevel + 1)))
                .append("</").append(headerTag).append(">");
    }

    private int calculateHeaderLevel(String line){
        int headerLevel = 1;
        while(headerLevel < line.length() && line.charAt(headerLevel) == '#'){
            headerLevel++;
        }
        return headerLevel;
    }

    private void processListItem(String line){
        if(!inList){
            resultBuilder.append("<ul>");
            inList = true;
        }
        resultBuilder.append("<li>").append(processText(line.substring(2))).append("</li>");
    }

    private void closeUnfinishedList(){
        if(inList){
            resultBuilder.append("</ul>");
            inList = false;
        }
    }

    private static String processText(String text){
        text = text.replaceAll("\\_\\_(.*?)\\_\\_", "<strong>$1</strong>")
                .replaceAll("\\_(.*?)\\_", "<em>$1</em>");
        return text;
    }
}
