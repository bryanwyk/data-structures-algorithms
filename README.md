>This is the space where I will be revising and testing my knowledge of data structures and algorithms. 
>I will be using JavaScript as my language of choice.
>Note: There is no need to initialise length of an array in JavaScript (https://stackoverflow.com/questions/4852017/how-to-initialize-an-arrays-length-in-javascript).
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

### Hash Tables

#### Characteristics
* Similar to dictionaries (Python-specific), which are objects in JavaScript.
* Implement with arrays within array (to store the key and data).
    * In Python, tuples would be used.
* **Used for searching**.
    * Stack would not be suitable as it is LIFO.
    * Queue would not be suitable as it is FIFO.
    * Unsorted list would not be suitable as the worst case is O(N).
        * Binary search for array.
        * Linear search for linked list.
    * Sorted list would not be suitable as the worst case is O(N).
        * Binary search for array.
        * Linear search for linked list.
* Time complexity:
    * Search:
        * Best case: allows constant O(1) time complexity. Only the key is needed, and the collection of items do not have to be traversed (as they would in a list).
        * Worst case: O(N) where N is the number of elements.
            * Depends on the hash function.
* Structure:
    * Each data element to be inserted must contain the item it is storing, and a unique key.

#### Typical operations
* Hash function
    * Maps the unique key to an array position.
    * Needs to minimise collisions (two keys mapped to same position).
    * How to define:
        1. Do not use numbers/letters/values etc. not relevant to the meaning of the data itself.
        2. The more elements from the key used, the better the hash function. But using all elements may be slow.
        3. Using all elements is not enough to guarantee a good spread of possible indices (e.g. adding all letters that have been converted into digits would still give possible numbers in a limited range). Use all elements **and** take into account its position in the key.
        4. The result should be something in the range of our TABLESIZE.
            * If it ends up too big, we can use % TABLESIZE.
            * If it ends up too small, we can convert to 0..1, and * TABLESIZE.
        5. Horner's method can be used.
            * Use a prime value for the table size. If many values and TABLESIZE share common factors, they will hash tot he same position.
* Insert
* Search
* Delete

#### Conflict resolution when dealing with collisions
> Which to pick:
> 1. **Linear probing** - if sufficient memory is used to ensure the table size is big to reduce chance of collision.
> 2. **Double hashing** - makes most efficient use of memory (in current table), but requires need to compute a second hash. Outperforms linear probing where the load factor is approaching 1 (i.e. fuller tables).
> 3. **Separate chaining** - simplest, resizable (use if do not know how many items to be included and there is a reasonable chance the table will become full), has fast insert and delete, but slow search. The load factor can be greater than 1. Also does not require rehashing every item in the case that the table becomes full like it does in open addressing.
* Closed Hashing/Open addressing (when each array position contains a single item)
    * Linear probing
        * How it works:
            * If array[N] is empty, put it there
            * If not, put item in the first empty space in the array from N+1 onward
        * Be careful of:
            * A full table - would need to rehash the entire table (create a bigger array and re-insert all items)
            * Restarting from position 0 if the end of the table is reached
        * Searching would need to require a linear search following the constant access search which can lead to O(N) at the worst case where N is the number of elements.
            * Alternative is to take bigger steps rather than N+1 (quadratic probing).
        * Deleting
            * We cannot just delete the item from its position (because there may be items placed in subsequent positions as a result of the linear probing). We also cannot re-shuffle everything back one position in subsequent positions as they may be in the right hashing spot without any linear probing.
            * Solution: re-insert every item from N+1 onward up until the first empty position.
        * A **cluster** is a sequence of full hash table slots. These tend to grow larger once they are formed.
        * Load factor: total # of items / TABLESIZE
            * There is a tendency for clustering to occur as the load factor is >0.5.
    * Quadratic probing
        * Do N+S^2, rather than N+S, where S is the step size (e.g. S=1).
        * Advantage: eliminates **primary clustering** (keys with different hash values having the same probe chains).
        * Disadvantage: still contains **secondary clustering** (keys with same hash values have the same probe chain).
        * Better alternative is double hashing.
    * Double hashing
        * When a collision occurs, a second hash function is used to determine the step.
            * Must not hash to 0.
            * Must be relative prime to the table size (not revisit the same positions)
    * Cuckoo hashing
        * Two hash functions and two hash tables.
        * The first hash function determines index in the first table, and the second hash function determines index in the second table.
        * If there is a collision in the first table, then store the item into the first table, and kick out the original item into the second table, and keep repeating until all the items have their own position. 
        * Give a maximum limit on number of iterations to stop hashing.
        * Time complexity
            * Search: O(1) best and worst time complexity. The key is either in table 1 or 2, just insert it into the hash function.
            * Insert: O(N) worst time complexity.
            * Delete: O(1) worst time complexity.
* Open Hashing/Separate Chaining (when each array position contains a linked list of items)
    * Insert: key inserted at end of linked list
    * Search: search for key in linked list
    * Delete: search for key, and then delete the node in the linked list
    * Advantages:
        * Insertions and deletions are easy and quick.
        * Naturally resizable.
    * Disadvantages:
        * Requires extra space for links.
        * Requires linear search for searching/deleting elements in a linked list.

### Binary Tree
* Good for searching.

#### Characteristics
* Consists of nodes and edges (directed i.e. arrow signifies direction).
* Node terminology:
    * A node can be a *parent* or *child* node.
    * Root node, inner nodes (anything that is not a root or leaf), leaf nodes.
* Tree terminology:
    * A sub-tree is a segment of the tree. A node can be considered a sub-tree.
    * A path is a directed sequence of edges.
    * Level: the root node is at level 0, and each child begins a new subsequent level.
        * The depth of a node is its level in the tree.
        * The height/depth of a tree is the max length of a path from the route.
            * Recursively computed as the max height of its nodes. An empty node is -1, and the max height of its children is +1.
    * The width of a tree is the number of nodes in the level with the most nodes.
* Each node can have at most 2 children.
* Binary tree terminology:
    * **Balanced** if for every node, the difference between the height of the left sub-tree and that of the right sub-tree is at most 1. Otherwise, it is **unbalanced**.
        * This is specific to being 'height-balanced'. It is also possible to look at being 'weight-balanced'. This depends on the type of balanced tree it is.
    * **Perfect** binary trees are where all parents have two children, and all leaves are at the same level.
        * Where height is *k*, the # of leaves should be 2^*k*, and the # of nodes is 2^(k+1) - 1.
            * Height would be O(logN).

#### Essentially a graph
* Graphs are composed of vertices (nodes) and edges.
* A tree is an acyclic, connected graph. In CS, we are looking at *rooted* trees.

#### Traversal methods
> Preorder: processes the root, then the left subtree, then the right subtree.
> Inorder: processes the left subtree, then the root, then the right subtree.
> Postorder: processes the left subtree, then the right subtree, then the root.

1. Preorder
2. Inorder
3. Postorder

* Time complexity:
    * Best case = worst case
    * O(N)*Compf where N is the number of elements, and Compf is the complexity of a function f executed on each element.

#### Use cases
* Family trees
* Organisation structure charts
* Structure of chapters and sections in a book

### Binary Search Tree
#### Characteristics
* Each node entry has a unique key and an item
* All keys in the left subtree of a node are less than the key of the node
* All keys in the right subtree of a node are greater than the key of the node

#### Use cases
* Good for searching (worst case time complexity is binary at O(log(N)*M) where N is the number of nodes, and M is the complexity of comparison) AND inserting and deleting (O(1) time complexity).
    * Best case of search is O(1) where key is at root.
    * Worst-case search time complexity is only O(log(N)* M) where the tree is balanced. If it is unbalanced, the worst case is (O(N)* M) e.g. linear tree/
        * To solve this, ensure that BST remains balanced at insertion/deletion (e.g. through the use of AVL trees).
* Alternative to sorted lists.
    * Sorted lists with arrays are good for search (binary), but bad for inserting/deleting (O(N) shuffling).
    * Sorted lists with linked lists are bad for search (linear), but good for inserting/deleting (O(1)).
* Alternative to hash tables if you need to traverse in a certain way.

#### Typical operations
* Search - described above
* Insert
    * Time complexity (N.B. we need complexity of comparison included as the item could be anything from a number to a string):
        * Worst case:
            * Balanced: O(log(N))*CompComparison
            * Unbalanced: O(N)*CompComparison
        * Best case: 
            * DO NOT SAY O(1)*CompComparison to attach to root as this is an exception/edge case.
            * Say O(1)*CompComparison where all the nodes are in the right or in the left, and the item is added to the opposite side.
    * Ways to prove correctness:
        * Check that a single node is added each time to the end, at an empty left/right child of current.
        * Prove by contradiction. Assume the tree is no longer a BST, and show if it is possible for a larger key to be added to the left, or a smaller key to be added to the right.
* Delete
    * If the node is a leaf:
        * Find the node.
        * Simply remove it from the parent node.
    * If the node has a single child:
        * Find the node.
        * Remove it from the parent node.
        * Attach the child to the parent node.
    * If the node has two children:
        * Find the node.
        * Remove it from the parent node.
        * Replace the node with its successor.
            * Find the sucessor by taking one step to the right, then all steps to the left until you find a leaf.
                * The successor can never have a left child, because then that would become the successor instead.
                * If the successor has a right child, attach the right child to the parent node of the successor.

#### Iterating a BST

* Can use a stack to iterate PreOrder.

### Priority queue

#### Characteristics
* Each item in the queue has a priority associated to it.
* The next item to be served is the one with the greatest priority (hence, a 'rear' marker is no longer needed).
* Can be implemented using arrays, linked lists, BSTs, or a heap (refer to notes below).
* For linear structures (arrays, linked lists):
    * *getMax* would have  worst case time complexity of O(N) if unsorted, and O(1) for sorted.
    * *add* would have worst case time complexity of O(1) if unsorted, and O(N) if sorted.

#### Typical operations
* add
    * Unsorted array:
        * Add to next empty space in the array.
        * Time complexity:
            * Best and worst case: O(1) as you just add to the marker of the next empty spot.
    * Sorted array:
        * Search for spot in the array, remove it, and then shuffle everything backwards.
        * Time complexity:
            * Best case: O(log N)*OComp using binary search, where the element is the largest, and no shuffling is required.
            * Worst case: O(N), where the element is the smallest, and shuffling of all elements is required.
    * Unsorted linked list:
        * Create node at head of the list.
        * Time complexity:
            * Best and worst case: O(1) as you just add to the head.
    * Sorted linked list:
        * Largest would be kept at the head.
        * Time complexity:
            * Best case: O(1)*OComp, where the input item is larger than the head.
            * Worst case: O(N)*OComp, where the input item becomes the smallest item in the list.
* getMax: Equivalent to 'serve' for a regular queue. Finds the maximum, removes it, and shuffles the remaining elements.
    * Unsorted array: 
        * Swap the next empty (null) spot with the served element, as it is easier than shuffling everything.
        * Time complexity:
            * Best and worst case: O(N)*OComp where N is the size of the queue, since we need to compare every element to find the max.
    * Sorted array:
        * Time complexity:
            * Best and worst case: O(1). Remove the last element in the array, and then shift marker backwards one position.
    * Unsorted linked list:
        * Time complexity:
            * Best and worst case: O(N)*OComp. Every element needs to be iterated through.
    * Sorted linked list:
        * Time complexity:
            * Best and worst case: O(1) as you remove from the head, and then re-attach the next node to the head.
    * BST:
        * Time complexity:
            * Best case: O(1) where the max is the root.
            * Worst case: O(Depth) if balanced, O(N) if unbalanced.
        
### Heap
> Note: JavaScript does not have an in-built heap implementation in comparison to Python which has the heapq library, and so it must be implemented with an array. (https://dandkim.com/js-heap-implementation/)
#### Characteristics
* Is a binary tree that is:
    * Complete: all levels but the last are full, and the last level is filled from the left.
    * Heap-ordered: explained below.
* Can either be a max-heap (where greater numbers are higher priority and it uses getMax), or a min-heap (where lower numbers are a higher priority and it uses getMin).
* Max-heap
    * *Heap-ordered*: Every child is smaller than (or equal to) its parent.
* Min-heap
    * *Heap-ordered*: Every child is greater than (or equal to) its parent
* **Allows in-place heap-sort**.
    * Once you have your heap:
        * Call getMax() to remove the root/max item.
        * After the next element rises to the root position, place the max item back into the empty leaf position.
        * Repeat this for the number of items in the heap.

#### Array implementation
* Assume index 0 of the array is left undefined.
* If the parent node is at position *k*:
    * The left child is at *2\*k*.
    * The right child is at *2\*k+1*.

| Parent Position | Child Left | Child Right |
| --- | --- | --- | 
| 1 | 2 | 3 |
| 4 | 8 | 9 |  
| 5 | 10 | 11 |

* If the heap has known elements in advance (i.e. array with elements in any order is passed), then every parent has to be sunk to ensure the heap is heap-ordered.

#### Typical operations for a max-heap

* add
    * Add the element to the next empty node as you would a BST, then keep swapping it up until the heap becomes heap-ordered.
    * Time complexity:
        * Best case: Where the element belongs to where it is initially added as a leaf so no swaps are made, which is O(1)*OComp. Adding and swapping in the array is constant, but a comparison needs to be made before each swap.
        * Worst case: Where the element rises all the way to the root position, which is O(logN)*OComp. O(logN) swaps are made.
* getMax
    * Swap the latest leaf with the root. Remove the root. Then swap the leaf (that is now at the root position) with the largest child, and repeatedly sink it until the heap becomes heap-ordered.
    * Time complexity:
        * Best case: Where the element is only swapped once, which is O(1)*OComp.
        * Worst case: Where the element sinks to the bottom of the heap, which is O(logN)*OCopm, where O(logN) swaps are made and logN is the depth of the heap.


### AVL Tree
#### Characteristics
* Height-balanced BST.
    * Any time that the heights differ by more than one, re-balancing is done.
    * Each node has a balance factor of 0, 1, or more.
#### Re-balancing
* Refer to slide notes.

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
| Algorithm | Time complexity: Best case | Time complexity: Worst case | Stable | Incremental | Space complexity | Auxiliary space complexity |
| --- | --- | --- | --- | --- | --- | --- |
| Bubble Sort - Basic | O(N^2) | O(N^2) | Yes | Yes (add to front), No (add to back) | O(N) | O(1) |
| Bubble Sort - Optimised | O(N) | O(N^2) | Yes | Yes (add to front), No (add to back) | O(N) | O(1) |
| Selection Sort | O(N^2) | O(N^2) | No (e.g. 3,3,1) | No | O(N) | O(1) |
| Insertion Sort | O(N) | O(N^2) | Yes | Yes (add to back), No (add to front) | O(N) | O(1) |
| Merge Sort | O(Nlog(N)) | O(Nlog(N)) | Yes | No | O(N) | O(N) |
| Quick Sort | O(Nlog(N)) | O(N^2) | No | No | O(N) | O(1) |
| Heap Sort (in-place) | O(Nlog(N)) | O(Nlog(N)) | No | Yes | O(N) | O(1) |

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

# 3. Recursion (revise more)
* Breaking a problem into smaller sub-problems until it reaches a base case, and then as we return through the calls it should be combining these sub-solutions.
* General structure:
    * At least one base case (solve directly)
    * At least one recursive call whose result is combined.
    * Convergence to the base case (i.e. each sub-problem must be simpler).
* Every iterative problem can be solved recursively.
* Every recursive problem can be solved iteratively, BUT past results may need to be stored in an accumulator or stack.

## 3.1 Problems
* Factorial
* Fibonacci (revise accumulator version)
    * Time complexity: O(2^n). Where log2(n) occurs when a problem keeps getting divided into half, fibonacci is binary (two recursive calls each time), so the problem doubles. Log is the inverse of exponential.
* Power (to add)
* Tower of Hanoi

## 3.2 Recursive Sorts
> Divide and conquer approach
> Note that the algorithms run within the array. Each 'split' is really a 'segment' of that array.
> Both of these also use accumulators (i.e. the whole array is passed recursively), and thus require auxiliary functions. They are tail recursive (nothing is done 'on the way down').
### RS 1: Merge sort
* https://www.youtube.com/watch?v=TzeBrDU-JaY
* Keeps splitting the solution, then sorts on the way back up from the recursion, then merges the sorted sub-solutions.
* General structure:
    * Create a temporary array of the same size as the original array.
    * Merge sort the left half (L).
        * We cannot magicaclly sort each half if we only have two halves. So instead, we have to recursively call merge sort on each half to break them down even further.
        * An array with one element is automatically sorted.
    * Merge sort the right half (R).
    * Merge the left and right sorted halves.
* Invariant:
    * At any point, the next smallest element is either the smallest unpicked sorted element in L or R.
        * Therefore, three markers are required on the next position of L, R, and the temporary array.
* Time complexity: O(nlog(n)) where n is the number of elements.
* Space complexity: O(n) where n is the number of elements.


### RS 2: Quick sort
* https://www.youtube.com/watch?v=COk73cpQbFQ
* General structure:
    * Select the middle as the pivot *p*.
    * Partition the array into two based on *p*.
        * LHS has all elements smaller than *p*;
        * RHS has all elements greater than *p*;
    * Keep repeating the partitioning.
* Time complexity:
    * Best case: The value of *p* is ideally the median for best time complexity. This would be O(N*log(N)) where N is the number of elements, as it would mean the array would be perfectly partitioned in half each time, and then compared to every other element.
    * Worst case: Where *p* is always the smallest or largest element. This would be O(N^2) where N is the number of elements. This is because the array would need to be partitioned by every single element, and compared to every other element.
* Possible ways to select the pivot:
    * Pick the first element - bad idea.
    * Pick a random element - bad idea.
    * Pick a small sample of elements and choose the median of these - good idea.
* For now, we will just pick the middle element for simplicity.

## 3.3 Notation
* Unary, binary, n-ary:
    * Unary: A single recursive call.
    * Binary: Two recursive calls.
    * n-ary: n recursive calls.
* Direct vs Indirect:
    * Direct: recursive calls are calls to the same function.
    * Indirect: recursive calls are calls to two or more methods.
* Tail-recursion:
    * Where the result of the recursive call is the result of the function.
    * Uses an **accumulator** which accumulates the result on the way down to the base case. Then, it does nothing on the way back on the returns from the recursive call except to carry the result back.

# 4. Dynamic Programming
## 4.1 Core Idea
* Divide a problem into subproblems in a recursive manner and solve these. **Memoise** these solutions, and use them to gradually build the solution for the original problem.
    * Memoise: optimisation technique to store the results of functions and return the cached result when the same inputs occur again.

# 5. Other Concepts
## 5.1 Time complexity with Big O Notation
* Each **for loop** is O(n) where n is the number of iterations.
* Always consider **best case** and **worst case** time complexity. This gives the range of possibilities.
    * Average case is between the two.
* When comparing algorithms, always compare the worst case. The best case is usually an exception, and we always want to prepare for the worst.
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

## 5.2 Space complexity
* Same Big-O notation used as time complexity.
* **Space complexity**: The amount of space taken by an algorithm to run as a function of the input size.
* **Auxiliary space complexity**: The amount of space taken by an algorithm **in addition to** the space taken by the input. i.e. it is the extra space needed besides the input.
    * An **in-place algorithm** has an auxiliary space complexity of O(1) because it takes no extra space e.g. quick-sort.
* Merge sort has an auxiliary space complexity of O(N) as it requires an additional temporary array.

## 5.3 Testing
* Equivalence testing
    * Divide possible discrete inputs into equivalent classes and test each.
* Boundary analysis
    * Test the boundaries of each class.

