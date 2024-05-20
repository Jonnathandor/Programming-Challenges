def rebase(input_base, digits, output_base):
    # Validate bases
    if input_base < 2:
        raise ValueError("input base must be >= 2")
    if output_base < 2:
        raise ValueError("output base must be >= 2")
    
    # Validate digits
    if any(d < 0 or d >= input_base for d in digits):
        raise ValueError("all digits must satisfy 0 <= d < input base")
    
    # Handle special cases
    if len(digits) == 0:
        return [0]
    if digits == [0] or all(d == 0 for d in digits):
        return [0]

    # Convert input digits to base 10
    base_10_number = 0
    for i, digit in enumerate(reversed(digits)):
        base_10_number += digit * (input_base ** i)

    # Convert base 10 number to output base
    if base_10_number == 0:
        return [0]

    output_digits = []
    while base_10_number > 0:
        output_digits.append(base_10_number % output_base)
        base_10_number //= output_base
    
    return output_digits[::-1]
