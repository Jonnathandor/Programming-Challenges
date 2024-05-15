def classify(number):
    if number <= 0:
        raise ValueError("Classification is only possible for positive integers.")
    
    sum_divisors = sum(i for i in range(1, number) if number % i == 0)
    
    if sum_divisors == number:
        return "perfect"
    elif sum_divisors > number:
        return "abundant"
    else:
        return "deficient"


