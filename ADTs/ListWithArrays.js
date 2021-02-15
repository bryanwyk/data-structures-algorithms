class ListWithArrays {
    // Creating
    constructor(){
        this.list = [];
    }

    // Accessing
    get list() {
        return this.list;
    }
    
    // Calculate length
    get length() {
        return this.list.length;
    }

    // Add
    addItem(item) {
        this.list.push(item);
    }

    // Delete
    deleteItem(index) {
        this.list.splice(index, 1);
    }

    // Is empty
    isEmpty() {
        return !!this.list.length;
    }

    // Find and retrieve an element
    getItem(index){
        return this.list[index];
    }
}

