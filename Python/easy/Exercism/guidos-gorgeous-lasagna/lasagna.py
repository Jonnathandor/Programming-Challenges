EXPECTED_BAKE_TIME = 40


def bake_time_remaining(elapsed_bake_time: int) -> int:
    """Calculate the remaining bake time.

    :param elapsed_bake_time: int - elapsed baking time (in minutes).
    :return: int - remaining bake time (in minutes) derived from 'EXPECTED_BAKE_TIME'.

    This function takes an integer representing the elapsed baking time (in minutes)
    and returns an integer representing the remaining bake time (in minutes) based
    on the constant 'EXPECTED_BAKE_TIME'.
    """
    return EXPECTED_BAKE_TIME - elapsed_bake_time


def preparation_time_in_minutes(number_of_layers: int) -> int:
    """
    Calculate the preparation time for the given number of lasagna layers.

    :param number_of_layers: An integer representing the number of lasagna layers to prepare.
    :return: An integer representing the total preparation time (in minutes).

    This function takes an integer representing the number of lasagna layers to prepare
    and returns the total time (in minutes) required to prepare them. It assumes that each
    layer takes 2 minutes to prepare.
    """
    return number_of_layers * 2


def elapsed_time_in_minutes(number_of_layers: int, elapsed_bake_time: int) -> int:
    """
    Calculate the elapsed cooking time.

    :param number_of_layers: int - the number of layers in the lasagna.
    :param elapsed_bake_time: int - elapsed cooking time.
    :return: int - total time elapsed (in minutes) preparing and cooking.

    This function takes two integers representing the number of lasagna layers and the
    time already spent baking and calculates the total elapsed minutes spent cooking the
    lasagna. It calls `preparation_time_in_minutes` function to calculate the time spent preparing
    the layers and adds it to the elapsed baking time.
    """
    return preparation_time_in_minutes(number_of_layers) + elapsed_bake_time
