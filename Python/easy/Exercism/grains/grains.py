def square(number):
    if number < 1 or number > 64:
        raise ValueError("square must be between 1 and 64")

    return 2 ** (number - 1)


def total():
    # The total() function uses the geometric series sum formula to calculate
    # the total number of grains on all 64 squares.
    # The formula is: sum = (a * (r ** n - 1)) / (r - 1)
    # where 'a' is the first term, 'r' is the common ratio, and 'n' is the number of terms.
    # In our case, a = 1, r = 2, and n = 64.
    a = 1
    r = 2
    n = 64

    return (a * (r ** n - 1)) // (r - 1)
