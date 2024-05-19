def value(colors):
    color_codes = {
        "black": 0,
        "brown": 1,
        "red": 2,
        "orange": 3,
        "yellow": 4,
        "green": 5,
        "blue": 6,
        "violet": 7,
        "grey": 8,
        "white": 9
    }
    
    first_digit = color_codes[colors[0]]
    second_digit = color_codes[colors[1]]
    
    return first_digit * 10 + second_digit
