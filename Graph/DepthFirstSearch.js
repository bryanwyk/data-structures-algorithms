const depthFirstSearch = (firstNode, item) => {
    const discovered = new Stack();
    discovered.push(firstNode);
    const visited = [];

    while (!discovered.isEmpty()) {
        let current = discovered.pop();
        // return true if it is the item of interest
        if (current.item === item) {
            return true;
        }
        // else, search through adjacent nodes
        for (adjacentNode of firstNode.edges) {
            if (discovered.includes(adjacentNode) || visited.includes(adjacentNode)) {
                continue;
            }
            discovered.push(adjacentNode);
        }
    }

    // if the entire graph has been traversed but the item is still not yet found
    return false;
}

class Stack {
    constructor(){
        this.stack = [];
        this.top = 0;
    }

    isEmpty(){
        return this.stack.length === 0;
    }

    push(item){
        this.stack.push(item);
        this.top += 1;
    }

    pop(){
        if (!this.isEmpty()){
            this.top -= 1;
            let item = this.stack[this.top];
            this.stack.splice(this.top, 1);
            return item;
        }
        return null;
    }
}