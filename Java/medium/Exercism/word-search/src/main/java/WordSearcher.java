import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.Set;

class WordSearcher {
    Map<String, Optional<WordLocation>> search(final Set<String> words, final char[][] grid) {
        Map<String, Optional<WordLocation>> resultMap = new HashMap<>();
        // Iterate over each row to search
        for(String word: words){
            boolean found = false;

            for(int row = 0; row < grid.length && !found; row++){
                // Is easier to look on a string. I convert the row from
                // a char array into a string
                String rowString = new String(grid[row]);

                // Search left to right
                int startIndex = rowString.indexOf(word);
                if(startIndex != -1){
                    Pair startPair = new Pair(startIndex+1,row+1);
                    Pair endPair = new Pair(startIndex + word.length(), row +1);

                    WordLocation location = new WordLocation(startPair, endPair);
                    resultMap.put(word, Optional.of(location));

                    found = true; // if word is found then we can break the loop
                    break;
                }

                // Search Right to Left by reversing the string
                String reversedRow = new StringBuilder(rowString).reverse().toString();
                int reversedStartIndex = reversedRow.indexOf(word);
                if(reversedStartIndex != -1){
                    //calculate the actual start and end indices in the original grid
                    int gridLength = grid[row].length;
                    int startX = gridLength - reversedStartIndex;
                    int endX = startX - word.length() +1;

                    Pair startPair = new Pair(startX, row+1);
                    Pair endPair = new Pair(endX, row+1);

                    WordLocation location = new WordLocation(startPair, endPair);
                    resultMap.put(word, Optional.of(location));

                    found = true;
                    break;
                }
            }

            if(!found){
                resultMap.put(word, Optional.empty());
            }
        }

        return resultMap;
    }
}
