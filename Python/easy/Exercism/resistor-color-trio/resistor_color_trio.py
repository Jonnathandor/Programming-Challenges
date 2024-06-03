def label(colors):
    color_to_value = {
        "black": 0,
        "brown": 1,
        "red": 2,
        "orange": 3,
        "yellow": 4,
        "green": 5,
        "blue": 6,
        "violet": 7,
        "grey": 8,
        "white": 9,
    }

    # Extract the digit values for the first two colors
    value = color_to_value[colors[0]] * 10 + color_to_value[colors[1]]
    
    # Determine the multiplier from the third color
    multiplier = 10 ** color_to_value[colors[2]]
    
    # Calculate the resistance
    resistance = value * multiplier
    
    # Determine the appropriate metric prefix
    if resistance >= 1_000_000_000:
        formatted_resistance = f"{resistance // 1_000_000_000} gigaohms"
    elif resistance >= 1_000_000:
        formatted_resistance = f"{resistance // 1_000_000} megaohms"
    elif resistance >= 1_000:
        formatted_resistance = f"{resistance // 1_000} kiloohms"
    else:
        formatted_resistance = f"{resistance} ohms"
    
    return formatted_resistance
