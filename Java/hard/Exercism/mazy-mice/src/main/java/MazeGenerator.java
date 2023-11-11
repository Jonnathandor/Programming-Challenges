import java.util.*;

public class MazeGenerator {
    private char[][] maze;
    private boolean[][] visited;
    private final Random rand;

    public MazeGenerator() {
        rand = new Random(); // Random without seed
    }

    // Overloaded constructor with seed
    public MazeGenerator(long seed) {
        rand = new Random(seed);
    }

    public char[][] generatePerfectMaze(int rows, int columns) {
        if (rows < 5 || rows > 100 || columns < 5 || columns > 100) {
            throw new IllegalArgumentException("Rows and columns must be between 5 and 100.");
        }

        int height = rows * 2 + 1;
        int width = columns * 2 + 1;
        maze = new char[height][width];
        visited = new boolean[rows][columns];

        // Initialize the maze with walls
        for (int i = 0; i < height; i++) {
            for (int j = 0; j < width; j++) {
                maze[i][j] = '┼'; // Fill with wall character
            }
        }

        // Carve out the maze
        recursiveBacktrack(0, 0);

        // Set entrance and exit
        maze[1][0] = '⇨'; // Entrance
        maze[height - 2][width - 1] = '⇨'; // Exit

        // Replace all visited cells with empty space
        for (int row = 0; row < rows; row++) {
            for (int col = 0; col < columns; col++) {
                if (visited[row][col]) {
                    maze[row * 2 + 1][col * 2 + 1] = ' ';
                }
            }
        }

        // Convert the remaining '┼' to the appropriate box drawing characters
        for (int i = 0; i < height; i++) {
            for (int j = 0; j < width; j++) {
                // Assuming a method to convert '┼' to the correct character based on neighbors
                maze[i][j] = convertToBoxCharacter(maze, i, j);
            }
        }

        return maze;
    }

    private void recursiveBacktrack(int row, int col) {
        visited[row][col] = true;

        int[][] directions = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
        Collections.shuffle(Arrays.asList(directions), rand);

        for (int[] dir : directions) {
            int newRow = row + dir[0];
            int newCol = col + dir[1];

            if (isValid(newRow, newCol)) {
                // Knock down the wall if there is one
                if (maze[row * 2 + 1 + dir[0]][col * 2 + 1 + dir[1]] == '┼') {
                    maze[row * 2 + 1 + dir[0]][col * 2 + 1 + dir[1]] = ' ';
                }

                recursiveBacktrack(newRow, newCol);
            }
        }
    }

    private boolean isValid(int row, int col) {
        return row >= 0 && row < visited.length && col >= 0 && col < visited[0].length && !visited[row][col];
    }

    private char convertToBoxCharacter(char[][] maze, int i, int j) {
        // Since we are using the '┼' character for all walls initially, we need to only convert these.
        if (maze[i][j] != '┼') {
            return maze[i][j];
        }

        boolean up = i > 0 && maze[i - 1][j] == ' ';
        boolean down = i < maze.length - 1 && maze[i + 1][j] == ' ';
        boolean left = j > 0 && maze[i][j - 1] == ' ';
        boolean right = j < maze[i].length - 1 && maze[i][j + 1] == ' ';

        if (up && down && left && right) {
            return '┼'; // Intersection
        } else if (up && down && left) {
            return '┤'; // T-junction opening to the left
        } else if (up && down && right) {
            return '├'; // T-junction opening to the right
        } else if (left && right && down) {
            return '┬'; // T-junction opening upwards
        } else if (left && right && up) {
            return '┴'; // T-junction opening downwards
        } else if (left && right) {
            return '─'; // Horizontal corridor
        } else if (up && down) {
            return '│'; // Vertical corridor
        } else if (down && right) {
            return '┌'; // Corner turning down and right
        } else if (down && left) {
            return '┐'; // Corner turning down and left
        } else if (up && right) {
            return '└'; // Corner turning up and right
        } else if (up && left) {
            return '┘'; // Corner turning up and left
        }

        return '┼'; // Default case, all walls intact
    }

    // Overloaded method to generate a maze with a seed
    public char[][] generatePerfectMaze(int rows, int columns, int seed) {
        rand.setSeed(seed);
        return generatePerfectMaze(rows, columns);
    }
}