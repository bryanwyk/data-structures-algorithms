import Node from './Node';

class LinkedQueue {
    constructor(){
        this.front = null;
        this.rear = null;
    }

    isEmpty(){
        return this.front===null && this.rear===null;
    }

    isFull() {
        return false;
    }

    append(item) {
        let newNode = new Node(item, null);
        if (isEmpty) {
            this.front = newNode;
        }
        else {
            this.rear.link = newNode;
        }

        this.rear = newNode;
    }

    serve() {
        if (!isEmpty) {
            let item = this.front.item;
            this.front = this.front.link;
            if (this.front === null) {
                this.rear = null;
            }
            return item;
        }
        return null;
    }

    reset() {
        this.front = null;
        this.rear = null;
    }

    deleteEvenNodes(){
        let count=0;
        let current=this.front;
        while ((current !== null) || (current.link !== null)) {
            if (current.link === this.rear) {
                this.rear = current;
            }
            current.link = current.link.link;
            current = current.link;
        }
    }
}