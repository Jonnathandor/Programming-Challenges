# Write a program that calculates the Body Mass Index (BMI) from a user's weight and height.

# The BMI is a measure of someone's weight taking into account their height. e.g. 
# If a tall person and a short person both weigh the same amount, the short person 
# is usually more overweight.

# 1st input: enter height in meters e.g: 1.65
height = input()
# 2nd input: enter weight in kilograms e.g: 72
weight = input()

print(int(int(weight) / float(height)**2)) #the challenge was expecting an int for some reason