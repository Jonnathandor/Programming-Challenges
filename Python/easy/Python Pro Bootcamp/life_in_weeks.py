# Create a program using maths and f-Strings that tells us how many weeks we have left, 
# if we live until 90 years old.

# It will take your current age as the input and output a message with our time left in this format:

# You have x weeks left.
# Where x is replaced with the actual calculated number of weeks the input age has left until age 90.

age = input()
age = int(age)
weeks_per_year = 52
life_expectancy = 90
weeks_left = (life_expectancy - age) * weeks_per_year
print(f"You have {weeks_left} weeks left.")