import Node from './Node';

class LinkedStack {
    constructor() {
        this.top = null;
    }

    get length(){
        let count = 0;
        let currentNode = this.top;
        while (currentNode !== null) {
            count += 1;
            currentNode = currentNode.link;
        }
        return count;
    }

    isEmpty() {
        return this.top === null;
    }

    isFull() {
        return false;
    }

    reset() {
        this.top = null;
    }

    push(item) {
        this.top = new Node(item, this.top);
    }

    pop() {
        if (!isEmpty) {
            let item = this.top.item;
            this.top = this.top.link;

            return item;
        }
        return null;
    }
}