"""
This exercise stub and the test suite contain several enumerated constants.

Enumerated constants can be done with a NAME assigned to an arbitrary,
but unique value. An integer is traditionally used because it’s memory
efficient.
It is a common practice to export both constants and functions that work with
those constants (ex. the constants in the os, subprocess and re modules).

You can learn more here: https://en.wikipedia.org/wiki/Enumerated_type
"""

# Possible sublist categories.
SUBLIST = "SUBLIST"
SUPERLIST = "SUPERLIST"
EQUAL = "EQUAL"
UNEQUAL = "UNEQUAL"


def sublist(list_one, list_two):
    
    # Edge cases
    if list_one == list_two:
        return EQUAL
    if not list_one:
        return SUBLIST
    if not list_two:
        return SUPERLIST
    
    #check if list_one is a sublist of list_two
    if is_sublist(list_one, list_two):
        return SUBLIST
    
    #check if list_two is a sublist of list_one
    if is_sublist(list_two, list_one):
        return SUPERLIST
    
    # If neither are sublists or equal
    return UNEQUAL

def is_sublist(sub, full):
    len_sub = len(sub)
    len_full = len(full)
    
    # Check all possible starting points for sublist in full list
    for i in range(len_full - len_sub + 1):
        if full[i:i + len_sub] == sub:
            return True
    return False
