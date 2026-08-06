def merge_sort_recursive(items, depth=0):
    """Sort a list of integers using recursive merge sort."""

    indent = "  " * depth

    print(f"{indent}merge_sort_recursive({items})")

    if len(items) <= 1:
        print(f"{indent}Base case hit. Returning {items}")
        return items

    mid = len(items) // 2

    left_half = items[:mid]
    right_half = items[mid:]

    print(f"{indent}Split {items} into:")
    print(f"{indent}  left:  {left_half}")
    print(f"{indent}  right: {right_half}")

    print(f"{indent}Sorting left half: {left_half}")
    sorted_left = merge_sort_recursive(left_half, depth + 1)

    print(f"{indent}Sorting right half: {right_half}")
    sorted_right = merge_sort_recursive(right_half, depth + 1)

    print(f"{indent}Now merge sorted halves:")
    print(f"{indent}  sorted_left:  {sorted_left}")
    print(f"{indent}  sorted_right: {sorted_right}")

    merged = merge(sorted_left, sorted_right, depth)

    print(f"{indent}Returning merged result: {merged}")

    return merged


def merge(left, right, depth=0):
    """Merge two already-sorted lists into one sorted list."""

    indent = "  " * depth

    print(f"{indent}merge({left}, {right})")

    result = []

    i, j = 0, 0

    while i < len(left) and j < len(right):
        print(f"{indent}  Comparing left[{i}]={left[i]} and right[{j}]={right[j]}")

        if left[i] <= right[j]:
            print(f"{indent}  {left[i]} is smaller or equal, so add it to result")
            result.append(left[i])
            i += 1
        else:
            print(f"{indent}  {right[j]} is smaller, so add it to result")
            result.append(right[j])
            j += 1

        print(f"{indent}  Result is now: {result}")

    while i < len(left):
        print(f"{indent}  Right list is empty. Add leftover left[{i}]={left[i]}")
        result.append(left[i])
        i += 1
        print(f"{indent}  Result is now: {result}")

    while j < len(right):
        print(f"{indent}  Left list is empty. Add leftover right[{j}]={right[j]}")
        result.append(right[j])
        j += 1
        print(f"{indent}  Result is now: {result}")

    print(f"{indent}Returning from merge: {result}")

    return result


data = [2, 8, 5, 3, 9, 4, 1, 7]

sorted_data = merge_sort_recursive(data)

print()
print(f"Original data: {data}")
print(f"Sorted data:   {sorted_data}")