def resistor_label(colors):
    # Color to value mapping
    color_map = {
        "black": 0, "brown": 1, "red": 2, "orange": 3, "yellow": 4,
        "green": 5, "blue": 6, "violet": 7, "grey": 8, "white": 9
    }

    # Tolerance value mapping
    tolerance_map = {
        "grey": "0.05%", "violet": "0.1%", "blue": "0.25%", "green": "0.5%",
        "brown": "1%", "red": "2%", "gold": "5%", "silver": "10%"
    }

    # Process based on the number of bands
    if len(colors) == 1:
        return f"{color_map[colors[0]]} ohms"
    
    if len(colors) == 4:
        value = color_map[colors[0]] * 10 + color_map[colors[1]]
        multiplier = 10 ** color_map[colors[2]]
        tolerance = tolerance_map[colors[3]]
    elif len(colors) == 5:
        value = color_map[colors[0]] * 100 + color_map[colors[1]] * 10 + color_map[colors[2]]
        multiplier = 10 ** color_map[colors[3]]
        tolerance = tolerance_map[colors[4]]
    
    resistance = value * multiplier

    # Determine the unit (ohms, kiloohms, megaohms)
    if resistance >= 1_000_000:
        resistance = f"{resistance / 1_000_000:.2f}".rstrip('0').rstrip('.') + " megaohms"
    elif resistance >= 1_000:
        resistance = f"{resistance / 1_000:.2f}".rstrip('0').rstrip('.') + " kiloohms"
    else:
        resistance = f"{resistance} ohms"

    return f"{resistance} ±{tolerance}"
