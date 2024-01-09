def is_armstrong_number(number):
    original_number = number
    num_digits = 0
    sum_of_powers = 0

    # Count the number of digits
    while number > 0:
        num_digits += 1
        number //= 10
    
    # Reset the number to the original
    number = original_number

    # Calculate the sum of each digit raised to the power of the number of digits
    while number > 0:
        # Starts by giving us the last digit from the number
        digit = number % 10
        sum_of_powers += digit ** num_digits
        number //=10

    return sum_of_powers == original_number

