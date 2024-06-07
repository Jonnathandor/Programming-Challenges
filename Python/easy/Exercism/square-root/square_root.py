def square_root(number):
    # If the number is 0 or 1, the square root is the number itself
    if number == 0 or number == 1:
        return number

    # Initialize low to 1 and high to the number itself
    low, high = 1, number

    # Continue the loop until low is greater than high
    while low <= high:
        # Calculate the midpoint of the current range
        mid = (low + high) // 2
        # Calculate the square of the midpoint
        mid_squared = mid * mid

        # Check if the square of the midpoint is equal to the number
        if mid_squared == number:
            return mid  # If true, return the midpoint as the square root
        # If the square of the midpoint is less than the number
        elif mid_squared < number:
            low = mid + 1  # Move the low boundary up to mid + 1
        # If the square of the midpoint is greater than the number
        else:
            high = mid - 1  # Move the high boundary down to mid - 1
    
    # When the loop ends, high will be the integer part of the square root
    return high
