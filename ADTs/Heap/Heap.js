class maxHeap {
    constructor(array=[]){
        this.count = array.length;

        // the array would be filled with added items, undefined in empty positions.
        this.array = array;

        // if the array was pre-loaded with elements
        if (this.count > 1) {
            // heapify every parent node (i.e. every node that is not a leaf)
            for (let i=(Math.floor(this.count/2)); i>=0; i--) {
                this.sink(this.array[i]);
            }
        }
    }

    // ADDING
    add() {
        this.count += 1;

        // Put element at bottom of the heap
        this.array[this.count];

        // While the heap order is broken, keep rising the new element (swapping it with the parent)
        this.rise(this.count);
        return true;
    }

    // Precondition: 1 <= k <= this.count
    rise(k){
        while ((k > 1) && (this.array[k] > Math.floor(this.array[k/2]))){
            this.swap(k, k/2);
            k = k/2;
        }
    }

    swap(a, b) {
        let tmp = this.array[a];
        this.array[a] = this.array[b];
        this.array[b] = tmp;
    }

    // GET MAX
    getMax(){
        // Swap the root element with the latest added element
        this.swap(this.count, 1);
        // Remove and return the root element (which should be the max)
        let tmp = this.array[this.count];
        this.count -= 1;

        // Sink the latest added element until it is in its proper position
        this.sink(1);

        return tmp;
    }

    // Precondition: 2*k <= this.count
    // e.g. removes case where there are only two items in the heap, and root would have no children

    sink(k){
        while (2*k <= this.count) {
            if (this.array[k] < this.array[2*k]) {
                this.swap(k, 2*k);
                k = 2*k;
            }
            if (this.array[k] < this.array[(2*k)+1]){
                this.swap(k, (2*k)+1);
                k = (2*k)+1;
            }
        }
    }

    inplaceHeapSort(){
        for (let i=this.count; i>0; i--) {
            // Remove the max value
            const max = this.getMax();
            // Add it to the last available position
            this.array[i] = max;
            
        }
    }
}
