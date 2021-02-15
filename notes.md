# FIT2085 Revision
## 1. Abstract Data types

___

> Abstract data types provide information about the possible **values** of that type, the **meaning** of those values, and the **operations** that can be done to them. The implementation details are abstracted to us and we do not necessarily care. <br> Data types, on the other hand, provide the same information as well as knowing how those values are **implemented** (e.g. array).
* Stacks
* Queues
* Lists
* Hash tables
* Trees (recursive)
* Heaps (recursive)

### List
#### Characteristics
* Ordered (N.B. not the same meaning as sorted)
* Must have direct access to the first element (head)
* From one position, you can access the *next* (if any)
#### Typical operations
* Creating: O(n) as you have to add each item to the list
* Accessing: O(1)
* Calculate length: O(1)
* Test if empty or full: O(1)
* Adding, deleting, finding and retrieving an element: O(1)

## 2. Data structures

___

> Provide information about a particular way in which data is physically organised in memory.
* Arrays
* Linked Nodes

## 3. Sort

___

### Summary of Sorts
| Algorithm | Best case | Worst case | Stable | Incremental |
| --- | --- | --- | --- | --- |
| Bubble Sort - Basic | O(N^2) | O(N^2) | Yes | Yes (add to front), No (add to back) |
| Bubble Sort - Optimised | O(N) | O(N^2) | Yes | Yes (add to front), No (add to back) |
| Selection Sort | O(N^2) | O(N^2) | No (e.g. 3,3,1) | No |
| Insertion Sort | O(N) | O(N^2) | Yes | Yes (add to back), No (add to front) |

### Sorting algorithm properties
* Incremental: If it does not need to re-compute everything after a small change (e.g. if adding one new element to a sorted list should only take one iteration. It would not be incremental if it required re-sorting the entire list). 
* Stable: If it maintains the relative order of elements. i.e. elements of the same value would always maintain their relative order in the sorted output as they do in the input array.

### 1st Sort: Bubble Sort
> Each element finds their final position one at a time. 
> 1. Start at position of the leftmost element X.
> 2. Compare X to element Y on its right.
> 3. If X > Y, swap them, otherwise don't. d
> 4. Move one position to the right (if any).
> 5. Repeat steps 1-4 N times, where N is the number of elements.

* Invariants
    * The list always has the same elements.
    * After every traversal, the **largest** yet unsorted element gets to its final place (i.e. the largest ones always 'bubble up'). 
* Time complexity:
    * Assume constant time for comparison.
    * Best case with optimisations: Occurs when the list is already sorted. O(N) where N is the number of elements.
    * Worst case with optimisations: O(N^2) where both loops run entirely.
* At its most basic level, bubble swap does both iterations entirely (best and worst case time complexity is O(N^2)). The following optimisations can be made:
    * Add 'swapped' boolean to stop iteration if list is already sorted.
    * Only traverse within the inner loop up to the point where elements are unsorted. Keep track of the index of where the unsorted elements end.

### 2nd Sort: Selection Sort
> 1. Start at position of the leftmost element X.
> 2. Traverse to find the minimum element in the rest of the list.
> 3. Swap with X.
> 4. Move one position to the right.

* Invariants
    * After every traversal, the **smallest** yet unsorted element gets to its final place.
* Time complexity:
    * Best and worst case is O(n^2).

### 3rd Sort: Insertion Sort
> Split the list into sorted and unsorted. 
> Extend 'sorted' by taking the smallest element from 'unsorted', shifting everything in sorted it is smaller than one to the right, and inserting it in to the start of 'sorted'.

* Time complexity:
    * Best case: Occurs when the list is already sorted. O(N) where N is the number of elements.
    * Worst case: O(N^2).

## 4. Search

___

### Linear search

* O(n) for **unsorted** list
* O(n) but more efficient for **sorted** list. 
    * **Invariant**: Every item must be bigger than previous items in the list.
    * **How?** Return *false* when *item* is smaller than the current element.

### Binary search

> If the value is the middle element, it is found.
> Else if the value is **smaller** than the middle element, search left half of the list with the same method.
> Else if the value is **larger** than the middle element, search right half of the list with the same method.

* Divide and conquer technique
* Can be solved either **recursively** or **iteratively**
* Time complexity:
    * Best case: 
        * Occurs when item is in the middle.
        * O(m) where m is the time to compare the middle item.
    * Worst case:
        * Occurs when item is not found.
        * O(m*log(n)) where m is the time for each comparison, and log(n) is the number of comparisons.
* Use cases:
    * List is sorted and implemented via an array.
        * An array would give O(1) access.

## Other concepts
### Time complexity with Big O Notation
* Each **for loop** is O(n) where n is the number of iterations.
* Always consider **best case** and **worst case** time complexity. This gives the range of possibilities.
    * Average case is between the two.
* Ignore constants.
* Ignore parts that do not contribute significantly.
* Always assume an unknown input size n for each argument that can be. massive.
* It is an upper bound (without the insignificant parts).

| Big O Efficiency class | Notation | Description | N (# of elements) and T (time) relationship
| --- | --- | --- | --- | --- |
| Constant | O(1) | Run time does not depend on N | T always remains constant |
| Logarithmic | O(log N) | Problem is broken down into smaller problems and solved independently. Each step cuts the size by a constant factor. *Note*: log2(N) is the number of times you can divide n by 2 before reaching 1. | If N doubles, T gets slightly slower.
| Linear | O(N) | Each element requires a fixed amount of processing | If N doubles, T doubles.
| Superlinear | O(NlogN) | Problem is broken into subproblems by a constant factor, then the final solution is obtained by combining the solutions. | If N doubles, then T gets slightly bigger than double. |
| Quadratic | O(N^2) | Pairs of data items processed (e.g. double nested loop) | If N doubles, T increases 4 times |
| Exponential | O(2^N) | Combinatorial explosion (e.g. family tree) | If N doubles, T squares. |
| Factorial | O(N!) | Find all permutations of N items | - |

### Testing
* Equivalence testing
    * Divide possible discrete inputs into equivalent classes and test each.
* Boundary analysis
    * Test the boundaries of each class.
