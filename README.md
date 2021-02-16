>This is the space where I will be revising and testing my knowledge of data structures and algorithms. 
>I will be using JavaScript as my language of choice.
# 1. Data Structures/Data Types
## 1.1 Abstract Data Types

> Abstract data types provide information about the possible **values** of that type, the **meaning** of those values, and the **operations** that can be done to them. The implementation details are abstracted to us and we do not necessarily care. 
> <br> 
> Data types, on the other hand, provide the same information as well as knowing how those values are **implemented** (e.g. array).
> <br>
> The benefit is that you can use ADTs to store data without needing to worry about its specific implementation, and just call its methods (abstraction). 
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

### Stack
#### Characteristics
* LIFO behaviour (pop, push)
* Often implemented with an **array** to store items in the order which they arrive, and an **integer** indicating the first empty space in the array.
* Requires keeping track of the top of the stack.
* Invariants:
    * Valid data ranges from 0...top-1.

#### Typical operations
* Push
* Pop
* Get size, test if empty or full

#### Use cases
* Reversing a sequence of characters
* Undo editing
* Parsing, run-time memory management, implement recursion

### Linked Stack
* Null/None is what the bottom node of the stack should be pointing to.
#### Comparison to Stack with Arrays
* Advantages:
    * Easy to resize (whereas arrays would have fixed size)
* Disadvantage:
    * Needs more memory space if the array would be relatively full.
    * A bit slower. It is still constant time for all its operations though.


### Queue
#### Characteristics
* FIFO behaviour (serve items from the front, append items to the rear).
* Requires keeping track of the start and end of the queue. 
* Note: If implementing with a fixed-size array, one way to tackle the issue of running out of space where *start* is not at index 0 is to implement a **circular queue** instead.

#### Typical operations
* Append
* Serve
* Reset
* Get size, test if empty or full

### Circular Queue (revise more)
#### Characteristics
* Simulated by allowing front and rear to wrap around each other.
* To do this, keep track of an extra attribute *count*.
    * Used to count number of valid elements in the queue. Thus, it can check if the queue is actually full or not when start===end.
    * Move rear on append using (rear + 1) % array.length.
* Time complexity:
    * To print everything in a queue: O(count*m), where m is the time it takes to print an item (which depends on the size of each item).

#### Use cases
* Print string/objects in a FIFO manner.
* Scheduling and buffering (printers, keyboards, async procedure calls)

### Linked Queue (revise more)
* Null/None is what rear node should be linked to.
* Time complexity:
    * Append: O(1)
    * Serve: O(1)
#### Use cases
* e.g. Delete all even nodes

## 1.2 Data Structures

> Provide information about a particular way in which data is physically organised in memory. i.e. the way a given Data Type is implemented.
### Arrays
* ADTs can be implemented with arrays
### Linked Nodes
* ADTs can be implemented as a collection of **nodes**.
* Each node contains one or more data items, and one or more links to other nodes.
* Advantages:
    * Fast deletion. The node is just deleted and the links are changed, there is no need for re-shuffling (e.g. in a List).
    * Fast adding. Add a new node and link it.
    * Easily resizable. Just create/delete nodes - no need to keep count or resize arrays.
    * Less memory used than an array if the array is relatively empty (e.g. a few nodes as opposed to an large-sized array that is mostly empty).
* Disadvantages:
    * More memory used than an array if the array is relatively full.

# 2. Algorithms
## 2.1 Sorts

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

## 2.2 Search

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

# 3. Concepts
## 3.1 Time complexity with Big O Notation
* Each **for loop** is O(n) where n is the number of iterations.
* Always consider **best case** and **worst case** time complexity. This gives the range of possibilities.
    * Average case is between the two.
* Ignore constants.
* Ignore parts that do not contribute significantly.
* Always assume an unknown input size n for each argument that can be massive.
* It is an upper bound (without the insignificant parts).

| Big O Efficiency class | Notation | Description | N (# of elements) and T (time) relationship |
| --- | --- | --- | --- |
| Constant | O(1) | Run time does not depend on N | T always remains constant |
| Logarithmic | O(log N) | Problem is broken down into smaller problems and solved independently. Each step cuts the size by a constant factor. *Note*: log2(N) is the number of times you can divide n by 2 before reaching 1. | If N doubles, T gets slightly slower.
| Linear | O(N) | Each element requires a fixed amount of processing | If N doubles, T doubles.
| Superlinear | O(NlogN) | Problem is broken into subproblems by a constant factor, then the final solution is obtained by combining the solutions. | If N doubles, then T gets slightly bigger than double. |
| Quadratic | O(N^2) | Pairs of data items processed (e.g. double nested loop) | If N doubles, T increases 4 times |
| Exponential | O(2^N) | Combinatorial explosion (e.g. family tree) | If N doubles, T squares. |
| Factorial | O(N!) | Find all permutations of N items | - |

## 3.2 Recursion (revise more)
* Breaking a problem into smaller sub-problems until it reaches a base case, and then as we return through the calls it should be combining these sub-solutions.
* General structure:
    * At least one base case (solve directly)
    * At least one recursive call whose result is combined.
    * Convergence to the base case (i.e. each sub-problem must be simpler).
* Every iterative problem can be solved recursively.
* Every recursive problem can be solved iteratively, BUT past results may need to be stored in an accumulator or stack.
    * An **accumulator** accumulates the result. The alternative is to have the function simply return the result.

### Notation
* Unary, binary, n-ary:
    * Unary: A single recursive call.
    * Binary: Two recursive calls.
    * n-ary: n recursive calls.
* Direct vs Indirect:
    * Direct: recursive calls are calls to the same function.
    * Indirect: recursive calls are calls to two or more methods.
* Tail-recursion:
    * Where the result of the recursive call is the result of the function.

## 3.3 Testing
* Equivalence testing
    * Divide possible discrete inputs into equivalent classes and test each.
* Boundary analysis
    * Test the boundaries of each class.
