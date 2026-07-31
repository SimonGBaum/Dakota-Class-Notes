
def insertion_sort(arr):
    for i in range(1, len(arr)):
        item = arr[i]
        j = i-1
        while j>= 0 and item < arr[j]:
            arr[j+1] = arr[j]
            j-=1
        arr[j+1] = item
        
    return arr

arr = [1, 7, 4, 3]
insertion_sort(arr)
print(arr)