def binary_search(arr, target, left, right):
    # CONQUER: base case
    # The remaining search area is empty.
    if left > right:
        return False

    # DIVIDE: find the middle of the current range.
    mid = (left + right) // 2

    # CONQUER: base case
    # We found the target.
    if arr[mid] == target:
        return True

    # DIVIDE: choose the left half.
    elif target < arr[mid]:

        # CONQUER: recursively search the smaller problem.
        # COMBINE: pass the recursive result back unchanged.
        return binary_search(arr, target, left, mid - 1)

    # DIVIDE: choose the right half.
    else:

        # CONQUER: recursively search the smaller problem.
        # COMBINE: pass the recursive result back unchanged.
        return binary_search(arr, target, mid + 1, right)