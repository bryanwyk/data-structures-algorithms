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

## 3. Search

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

## Other concepts
### Time complexity with Big O Notation
* Each **for loop** is O(n) where n is the number of iterations.
* Always consider **best case** and **worst case** time complexity.

### Testing
* Equivalence testing
    * Divide possible discrete inputs into equivalent classes and test each.
* Boundary analysis
    * Test the boundaries of each class.
