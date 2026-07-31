# https://pyalgoviz.appspot.com/show?edit=False&name=Sorting%20-%20BubbleSort

# O(n²) - Quadratic Time
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                
                
data = [4, 3, 2, 1]
sorted_data = [1, 2, 3, 4]
bubble_sort(data)
print(data)
bubble_sort(sorted_data)
print(sorted_data)
