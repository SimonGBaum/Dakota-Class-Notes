def merge_sort_iterative(items):
    """Sort a list of integers using iterative merge sort."""

    items_len = len(items)

    print(f"Starting list: {items}")
    print("-" * 50)

    if items_len <= 1:
        print("List has 0 or 1 items, so it is already sorted.")
        return items

    sublist_len = 1

    while sublist_len < items_len:
        print(f"\nCURRENT SUBLIST SIZE: {sublist_len}")
        print(f"Current list before this pass: {items}")

        for i in range(0, items_len, 2 * sublist_len):
            left_sublist = items[i:i + sublist_len]
            right_sublist = items[i + sublist_len:i + 2 * sublist_len]

            print()
            print(f"Looking at index {i}")
            print(f"Left sublist:  {left_sublist}")
            print(f"Right sublist: {right_sublist}")

            merged_sublists = merge(left_sublist, right_sublist)

            print(f"Merged result: {merged_sublists}")

            items[i:i + len(merged_sublists)] = merged_sublists

            print(f"List after putting merged result back: {items}")

        sublist_len *= 2

        print()
        print(f"Finished this pass.")
        print(f"Next sublist size will be: {sublist_len}")
        print("-" * 50)

    print(f"\nFinal sorted list: {items}")

    return items


def merge(left, right):
    """Merge two already-sorted lists into one sorted list."""

    result = []

    i, j = 0, 0

    print(f"  merge({left}, {right})")

    while i < len(left) and j < len(right):
        print(f"    Comparing left[{i}]={left[i]} and right[{j}]={right[j]}")

        if left[i] <= right[j]:
            print(f"    {left[i]} is smaller or equal, so add it to result")
            result.append(left[i])
            i += 1
        else:
            print(f"    {right[j]} is smaller, so add it to result")
            result.append(right[j])
            j += 1

        print(f"    Result is now: {result}")

    while i < len(left):
        print(f"    Right list is empty. Add leftover left[{i}]={left[i]}")
        result.append(left[i])
        i += 1
        print(f"    Result is now: {result}")

    while j < len(right):
        print(f"    Left list is empty. Add leftover right[{j}]={right[j]}")
        result.append(right[j])
        j += 1
        print(f"    Result is now: {result}")

    print(f"  Returning merged list: {result}")

    return result


data = [2, 8, 5, 3, 9, 4, 1, 7]

sorted_data = merge_sort_iterative(data)

print()
print(f"sorted_data: {sorted_data}")