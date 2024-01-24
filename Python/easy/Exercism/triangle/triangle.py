def equilateral(sides):
    return len(set(sides)) == 1 and all(side > 0 for side in sides)

def isosceles(sides):
    return len(set(sides)) <= 2 and all(side > 0 for side in sides) and not violates_triangle_inequality(sides)

def scalene(sides):
    return len(set(sides)) == 3 and all(side > 0 for side in sides) and not violates_triangle_inequality(sides)

def violates_triangle_inequality(sides):
    a, b, c = sorted(sides)
    # Check the Triangle Inequality Theorem which states that the sum of the lengths
    # of any two sides of a triangle must be greater than the length of the third side.
    # This function returns True if the theorem is violated, indicating that the sides
    # cannot form a valid triangle. If the sum of the shorter two sides (a and b) is
    # less than or equal to the length of the longest side (c), the sides do not satisfy
    # the theorem, hence the triangle inequality is violated.
    return a + b <= c

