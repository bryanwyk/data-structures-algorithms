// Assumes the Array is of a fixed size.
class Queue {
    constructor(size){
        let front = 0;
        let rear = 0;
        this.queue = [front, rear, new Array(size)];
    }

    get size(){
        [front, rear, queue] = this.queue
        return rear-front;
    }

    isFull(){
        [front, rear, queue] = this.queue
        return this.size() === queue.length;
    }

    isEmpty(){
        [front, rear, queue] = this.queue;
        return front === rear;
    }

    append(item) {
        if (!this.isFull()){
            [front, rear, queue] = this.queue;
            queue[rear] = item;
            rear =+ 1;
            this.queue = [front, rear, queue];
            return true;
        }
        return false;
    }

    serve(){
        if (!this.isEmpty()){
            [front, rear, queue] = this.queue;
            let item = queue[front];
            front += 1;
            this.queue = [front, rear, queue];
            return item;
        }
        return null;
    }

    reset(){
        [front, rear, queue] = this.queue;
        front = 0;
        rear = 0;
        this.queue = [front, rear, queue];
    }

}

class CircularQueue{
    constructor(size){
        let front = 0;
        let rear = 0;
        let count = 0;
        this.queue = [front, rear, new Array(size), count];
    }

    get size(){
        [front, rear, queue, count] = this.queue;
        return count;
    }

    isFull(){
        [front, rear, queue, count] = this.queue;
        return this.size() === queue.length;
    }

    isEmpty(){
        [front, rear, queue, count] = this.queue;
        return count === 0;
    }

    append(item) {
        [front, rear, queue, count] = this.queue;
        queue[rear] = item;
        this.queue = [front, (rear + 1) % this.queue.length, queue, count+1];
        return true;
    }

    serve(){
        if (!this.isEmpty()){
            [front, rear, queue, count] = this.queue;
            let item = queue[front];
            this.queue = [front + 1, rear, queue];
            return item;
        }
        return null;
    }

    reset(){
        [front, rear, queue, count] = this.queue;
        front = 0;
        rear = 0;
        this.queue = [front, rear, queue];
    }

    printItems(){
        [front, rear, queue, count] = this.queue;
        let index = front;

        for (let j=0; j<count; j++) {
            console.log(queue[index]);
            index = (index + 1) %  queue.length;
        }
    }
}