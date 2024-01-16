def steps(number):
    """
    Calculate the number of steps to reach 1 using the following process:
    If the number is even, divide it by 2. If the number is odd, multiply it by 3 and add 1.
    Continue this process until the number is 1.

    Args:
    number (int): A positive integer to apply the process to.

    Returns:
    int: The number of steps taken to reach 1.
    """
    if number <= 0:
        raise ValueError("Only positive integers are allowed")
    
    step_count = 0

    while number != 1:
        if number % 2 == 0:
            """In binary terms, shifting the bits of a number to the right by one 
            position effectively halves the number. For example, if number is 8 
            (which is 1000 in binary), then number >>= 1 will change its value to 4 (which is 100 in binary)."""
            number >>= 1  # equivalent to number //= 2
        else:
            number = number * 3 + 1
        
        step_count += 1
    
    return step_count