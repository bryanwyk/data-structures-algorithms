class Stack {
    constructor(size){
        this.stack = [0, new Array(size)];
    }    
    get size(){
        [top, elements] = this.stack;
        return top;
    }
    isFull() {
        [top, elements] = this.stack;
        return this.size() === elements.length();
    }
    isEmpty() {
        return this.size() === 0;
    }
    push(item) {
        // Check if full
        if (!this.isFull()){
            [top, elements] = this.stack;
            elements[top] = item;
            this.stack = [top+1, elements];
            return true;
        }
        return false;
    }
    pop() {
        if (!this.isEmpty()){
            [top, elements] = this.stack;
            top -= 1;
            let item = elements[top];
            // Just move top down by one index. There is no need to change the values because it will get overwritten.
            // isFull() would not be affected because it checks what 'top' is.
            return item;
        }
        return null;
    }
}