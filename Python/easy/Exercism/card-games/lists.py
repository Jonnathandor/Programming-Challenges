"""Functions for tracking poker hands and assorted card tasks.

Python list documentation: https://docs.python.org/3/tutorial/datastructures.html
"""


def get_rounds(number):
    """Create a list containing the current and next two round numbers.

    :param number: int - current round number.
    :return: list - current round and the two that follow.
    """

    return [number, number + 1, number + 2]


def concatenate_rounds(rounds_1, rounds_2):
    """Concatenate two lists of round numbers.

    :param rounds_1: list - first rounds played.
    :param rounds_2: list - second set of rounds played.
    :return: list - all rounds played.
    """

    return rounds_1 + rounds_2


def list_contains_round(rounds, number):
    """Check if the list of rounds contains the specified number.

    :param rounds: list - rounds played.
    :param number: int - round number.
    :return: bool - was the round played?
    """

    return number in rounds


def card_average(hand):
    """Calculate and returns the average card value from the list.

    :param hand: list - cards in hand.
    :return: float - average value of the cards in the hand.
    """

    return sum(hand) / len(hand)


def approx_average_is_average(hand):
    """Return if the (average of first and last card values) OR ('middle' card) == calculated average.

    :param hand: list - cards in hand.
    :return: bool - does one of the approximate averages equal the `true average`?
    """

    return (hand[0] + hand[-1]) / 2 == card_average(hand) or hand[len(hand) // 2] == card_average(hand)


def average_even_is_average_odd(hand):
    """Return if the (average of even indexed card values) == (average of odd indexed card values).

    :param hand: list - cards in hand.
    :return: bool - are even and odd averages equal?
    """

    if not hand:
        return True  # If the hand is empty, consider the averages equal

    even_indices_sum = sum(hand[i] for i in range(0, len(hand), 2))
    odd_indices_sum = sum(hand[i] for i in range(1, len(hand), 2))

    even_indices_count = len(hand[0::2])
    odd_indices_count = len(hand[1::2])

    even_average = even_indices_sum / even_indices_count if even_indices_count != 0 else 0
    odd_average = odd_indices_sum / odd_indices_count if odd_indices_count != 0 else 0

    return even_average == odd_average


def maybe_double_last(hand):
    """Multiply a Jack card value in the last index position by 2.

    :param hand: list - cards in hand.
    :return: list - hand with Jacks (if present) value doubled.
    """

    if hand and hand[-1] == 11:  # Check if the hand is not empty and the last card is a Jack (value 11)
        hand[-1] *= 2  # Double the value of the last card
    
    return hand  # Return the modified hand
