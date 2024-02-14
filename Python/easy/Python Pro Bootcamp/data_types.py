# Write a program that adds the digits in a 2 digit number. 
# e.g. if the input was 35, then the output should be 3 + 5 = 8

# Warning. Do not change the code on line 1. Your program should work 
# for different inputs. e.g. any two-digit number.

# The last line of your program should print the result.
two_digit_number = input()

first_digit = int(two_digit_number[0])
second_digit = int(two_digit_number[1])

sum_of_digits = first_digit + second_digit

print(sum_of_digits)