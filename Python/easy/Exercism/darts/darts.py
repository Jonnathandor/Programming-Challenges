import math 

def score(x, y):
    # Implementing the distance formula to calculate the distance from the point (x, y) to the origin (0, 0)
    distance = math.sqrt((0 - x)**2 + (0 - y)**2)

    # Determine the score based on the distance
    if distance > 10:
        return 0  # Outside the target
    elif distance > 5:
        return 1  # Outer circle
    elif distance > 1:
        return 5  # Middle circle
    else:
        return 10  # Inner circle or bullseye