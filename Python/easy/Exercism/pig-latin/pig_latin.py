def translate(text):
    # Splitting the text into words
    words = text.split()

    # Process each word individually
    pig_latin_words = [translate_word(word) for word in words]

    # Joining the translated words back into a single string
    return ' '.join(pig_latin_words)

def translate_word(word):
    # Rule 1: Vowel sound at the beginning (including "xr" and "yt")
    if word.startswith(('a', 'e', 'i', 'o', 'u', 'xr', 'yt')):
        return word + 'ay'

    # For all other scenarios, including consonant sounds and 'qu'
    return handle_consonant(word)

def handle_consonant(word):
    # Special case handling for "qu" including when it follows a consonant
    if word.startswith("qu"):
        return word[2:] + word[:2] + 'ay'
    elif 'qu' in word[1:]:  # Checks if 'qu' exists not at the start but further in the word
        qu_index = word.find('qu')
        return word[qu_index+2:] + word[:qu_index+2] + 'ay'

    for i, char in enumerate(word):
        if char in 'aeiou' or (char == 'y' and i != 0):
            return word[i:] + word[:i] + 'ay'
    
    return word + 'ay'  # Fallback, assuming every word can be translated