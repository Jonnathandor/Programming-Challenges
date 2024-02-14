import string 

def is_pangram(sentence):
    return len(set(sentence.lower()) & set(string.ascii_lowercase)) == 26
