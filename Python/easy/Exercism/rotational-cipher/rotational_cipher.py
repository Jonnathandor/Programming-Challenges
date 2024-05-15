def rotate(text, shift):
    result = []
    
    for char in text:
        if char.islower():
            shifted = (ord(char) - ord('a') + shift) % 26 + ord('a')
            result.append(chr(shifted))
        elif char.isupper():
            shifted = (ord(char) - ord('A') + shift) % 26 + ord('A')
            result.append(chr(shifted))
        else:
            result.append(char)
    
    return ''.join(result)
