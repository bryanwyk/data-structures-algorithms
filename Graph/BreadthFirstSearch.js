import GraphNode from './GraphNode';

const breadthFirstSearch = (firstNode, item) => {
    // Create discovered and visited arrays
    // Place the first node into discovered
    const discovered = new Queue();
    discovered.append(firstNode);
    const visited = [];

    // While there are still nodes that have been discovered, but not yet visited
    while (!discovered.isEmpty()) {
        let currentNode = discovered.serve();
        // If we have found the item of interest, return true
        if (currentNode.item === item) {
            return true;
        }
        
        // Else, discover the nodes adjacent to the current node to be visited
        for (adjacentNode of currentNode.edges) {
            // If the node has already been visited or discovered in the past
            if (visited.includes(adjacentNode) || discovered.includes(adjacentNode)) {
                continue;
            }
            else {
                discovered.append(adjacentNode);
            }
        }
    }

    // if item is still not found after the entire traversal
    return false;
}

class Queue {
    constructor(){
        this.queue = [];
    }

    isEmpty(){
        return this.queue.length === 0;
    }

    append(item){
        this.queue.push(item);
    }

    serve(){
        if (!this.isEmpty()){
            let item = this.queue[0];
            this.queue.splice(0, 1);
            return item;
        }
        return null;
    }

    includes(item){
        return this.queue.includes(item);
    }
}