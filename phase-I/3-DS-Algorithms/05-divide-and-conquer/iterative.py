def merge_sort_iterative(items):
    """Sort a list of integers using iterative merge sort."""

    # Store the total number of items in the list.
    items_len = len(items)

    # Base case:
    # If the list has 0 or 1 items, it is already sorted.
    if items_len <= 1:
        return items

    # In merge sort, we eventually merge sorted sublists together.
    # Iterative merge sort starts at the bottom.
    # At first, we treat each individual item as a sorted sublist of length 1.
    sublist_len = 1

    # Keep looping until the size of the sublists we are merging
    # is at least as large as the full list.
    while sublist_len < items_len:

        # Walk through the full list in chunks.
        #
        # Each pair of chunks will have:
        # - one left sublist of length sublist_len
        # - one right sublist of length sublist_len
        #
        # Since we are grabbing TWO sublists at a time,
        # the step size is 2 * sublist_len.
        #
        # Example:
        # If sublist_len is 1, we compare chunks starting at:
        # 0, 2, 4, 6...
        #
        # If sublist_len is 2, we compare chunks starting at:
        # 0, 4, 8...
        for i in range(0, items_len, 2 * sublist_len):

            # Slice out the left sublist.
            #
            # It starts at index i.
            # It ends at i + sublist_len.
            #
            # Example:
            # items = [2, 8, 5, 3]
            # i = 0
            # sublist_len = 1
            # left_sublist = items[0:1] -> [2]
            left_sublist = items[i:i + sublist_len]

            # Slice out the right sublist.
            #
            # It starts where the left sublist ended.
            # It ends after another sublist_len items.
            #
            # Example:
            # items = [2, 8, 5, 3]
            # i = 0
            # sublist_len = 1
            # right_sublist = items[1:2] -> [8]
            right_sublist = items[i + sublist_len:i + 2 * sublist_len]

            # Merge the two sorted sublists into one larger sorted list.
            #
            # At the beginning, each sublist has only one item,
            # so each sublist is already sorted.
            merged_sublists = merge(left_sublist, right_sublist)

            # Put the merged sorted list back into the original list.
            #
            # This replaces the section of items that originally contained
            # the left and right sublists.
            #
            # Example:
            # left_sublist = [8]
            # right_sublist = [5]
            # merged_sublists = [5, 8]
            #
            # So this section of the list gets replaced with [5, 8].
            items[i:i + len(merged_sublists)] = merged_sublists

        # At this point, all sublists of the current size have been merged.
        #
        # So now we double the sublist size.
        #
        # First pass: merge lists of length 1 into lists of length 2.
        # Second pass: merge lists of length 2 into lists of length 4.
        # Third pass: merge lists of length 4 into lists of length 8.
        sublist_len *= 2

    # Once sublist_len is bigger than or equal to the full list length,
    # the entire list has been sorted.
    return items

# EXPLAIN 2 Pointers

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
sorted_data = merge_sort_iterative(data)

# Print the final sorted list.
print(sorted_data)