def merge_sort_recursive(items):
    """Sort a list of integers using recursive merge sort."""
    # Base case:
    if len(items) <= 1:
        return items

    mid = len(items)//2
    
    #DIVIDE
    left_half = items[:mid]
    right_half = items[mid:]

    # CONQUER
    sorted_left = merge_sort_recursive(left_half)
    sorted_right = merge_sort_recursive(right_half)
    
    return merge(sorted_left, sorted_right)
    
    

def merge(left, right):
    """Merge two already-sorted lists into one sorted list."""

    # This list will hold the merged, sorted result.
    result = []

    # i tracks our current position in the left list.
    # j tracks our current position in the right list.
    i, j = 0, 0

    # Keep looping while BOTH lists still have items left to compare.
    #
    # Once one list runs out, we stop comparing and just copy over
    # whatever remains in the other list.
    while i < len(left) and j < len(right):

        # Compare the current item from the left list
        # to the current item from the right list.
        #
        # Whichever one is smaller gets added to result next.
        if left[i] <= right[j]:

            # The left item is smaller or equal,
            # so it belongs next in the sorted result.
            result.append(left[i])

            # Move forward one spot in the left list.
            i += 1

        else:

            # The right item is smaller,
            # so it belongs next in the sorted result.
            result.append(right[j])

            # Move forward one spot in the right list.
            j += 1

    # If there are leftover items in the left list,
    # add them to the result.
    #
    # We do not need to compare them anymore because:
    # - the left list was already sorted
    # - the right list is empty
    while i < len(left):
        result.append(left[i])
        i += 1

    # If there are leftover items in the right list,
    # add them to the result.
    #
    # Same idea:
    # we do not need to compare them anymore because
    # the remaining items are already sorted.
    while j < len(right):
        result.append(right[j])
        j += 1

    # Return the fully merged sorted list.
    return result


# Example list to sort.
data = [2, 8, 5, 3, 9, 4, 1, 7]

# Call merge_sort_iterative and store the sorted result.
sorted_data = merge_sort_recursive(data)

# Print the final sorted list.
print(sorted_data)


