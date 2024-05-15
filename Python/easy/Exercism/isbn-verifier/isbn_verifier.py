def is_valid(isbn):
    isbn = isbn.replace('-', '')
    if len(isbn) != 10:
        return False
    
    if not isbn[:9].isdigit() or (isbn[9] not in '0123456789X'):
        return False
    
    total = 0
    for i in range(10):
        if isbn[i] == 'X':
            digit = 10
        else:
            digit = int(isbn[i])
        total += (10 - i) * digit
        
    return total % 11 == 0
