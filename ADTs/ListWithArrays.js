class UnsortedList {
    // Creating with a bounded size
    constructor(size){
        this.list = [0, new Array(size)];
    }

    // Accessing
    get list() {
        return this.list[1];
    }
    
    // Calculate length
    get length() {
        return this.list[0];
    }

    // Add WITHOUT using in-built JavaScript push()
    addItem(item) {
        if (!this.isFull()) {
            this.list[0] += 1;
            this.list[1][this.list[0]] = item;
            return true;
        }
        return false;
    }

    // Delete WITHOUT using in-built JavaScript splice()
    // Shuffle items one position to the right
    // Best case: Item is not found. Shuffle takes O(1), then linear search would take O(n), binary search would take O(log(n)).
    // Worst case: Item is found last. Shuffle takes O(n) where n is number of elements. e.g. for binary search it would be O(log(N)) + O(N) which is approximately O(N);
    deleteItem(item) {
        // A binary search or linear search could be implemented for this.
        index = this.list[1].indexOf(item);
        // returns -1 if not found
        if (!(index === -1)) {
            let listLength, list;
            [listLength, list] = this.list;
            for (let i=index; i<listLength; i++) {
                list[i] = list[i+1]
            }
            this.list = [listLength-1, list];
            return true;
        }
        return false;
    }

    // Is empty
    isEmpty() {
        return !!this.list[1].length;
    }

    // Is full
    isFull() {
        return this.list[0] >= this.list[1].length;
    }

    // Find and retrieve an element
    getItem(index){
        return this.list[1][index];
    }
}

class sortedList {
    // Creating with a bounded size
    constructor(size){
        this.list = [0, new Array(size)];
    }

    // Best case: List is full. O(m) where m is time to check if its full.
    // Worst case: Item is the smallest. O(m*n) where m is time to check if its full, and n is the size of the list
    addSorted(item) {
        if (!this.isFull()) {
            // Insertion sort
            let i = this.list[0];
            while ((i > 0) && (this.list[i-1] > item)) {
                this.list[i] = this.list[i-1];
                i -= 1;
            }
            // add item
            this.list[i] = item;
            // increment length
            this.list[0] += 1;
            return true;
        }
        return false;
    }

    isFull(){
        return this.list[0] >= this.list[1].length;
    }
}