
# https://visualgo.net/en/sorting



# Insertion Sort Is O(n^2)

# Best Case: O(n) - when the array is already sorted.
# Average Case: O(n^2) - for a randomly ordered array.
# Worst Case: O(n^2) - when the array is sorted in reverse order.


# Each nested while loop "slides" an item at most 2 elements. 
# The outer loop does n - 1 comparisons, 
# so for a list of length n where we are guaranteed each element is 
    # no more than k positions out of place ...

# It takes at most k * (n - 1) operations to sort our 'almost sorted' list.
    #  O(k * (n - 1)) is just O(n), so for this 'almost sorted' special case,
    # we get significantly better performance!

# An "almost-sorted" array like this, where element is guaranteed to be no more 
    #  than k places "out of position", is called a k-sorted array.

# Insertion sort will also have performance somewhere between O(n) and O(n^2) 
    # for a partially-sorted array such as the one below. 
    # This is because Insertion Sort 'knows' which part of the list it has sorted already.

def insertion_sort(arr):
    for i in range(1, len(arr)):
        item = arr[i]

        # Compare item to left neighbor arr[j]. if arr[j] is bigger, shift j right.
        # Decrement j and keep comparing item to arr[j] 
            #  and shifting until arr[j] is smaller than item.
        j = i-1
        while j >= 0 and item < arr[j] :
                arr[j + 1] = arr[j]
                j -= 1

        # item is bigger than arr[j] - insert item to the left of j.
        # Everything in the list up to index j+1 is now guaranteed to be sorted.
        arr[j + 1] = item

    return arr


# run our algorithm
arr = [1, 7, 4, 3]
insertion_sort(arr)
for i in range(len(arr)):
    print(arr[i])