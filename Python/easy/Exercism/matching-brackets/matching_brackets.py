def is_paired(input_string):
    # Define matching pairs of brackets
    matching_bracket = {')': '(', ']': '[', '}': '{'}
    stack = []

    for char in input_string:
        if char in matching_bracket.values():  # If it's one of '(', '[', '{'
            stack.append(char)
        elif char in matching_bracket.keys():  # If it's one of ')', ']', '}'
            if stack and stack[-1] == matching_bracket[char]:
                stack.pop()
            else:
                return False

    return len(stack) == 0
