class MicroBlog {
    public String truncate(String input) {
        int limit = 5;
        int count = input.codePointCount(0, input.length());
        return count <= limit ? input : input.substring(0, input.offsetByCodePoints(0, limit));
    }
}
