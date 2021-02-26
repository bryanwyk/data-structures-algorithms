import BinarySearchTreeNode from './BinarySearchTreeNode';

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    isEmpty(){
        return this.root === null;
    }

    // SEARCH
    // Can be used or modified for .contains(), or .getItem().
    search(key){
        this.searchAux(this.root, key);
    }

    searchAux(current, key) {
        if (key === current.key) {
            return true;
        }
        else if (key < current.key) {
            this.searchAux(current.left, key);
        }
        else if (key > current.key) {
            this.searchAux(current.right, key);
        }
        else {
            // i.e. if current is null
            return false;
        }
    }

    // INSERT
    // This can also be changed to set item
    insert(key, item) {
        this.root = this.insertAux(this.root, key, item);
    }

    insertAux(current, key, item) {
        if (current === null) {
            current = new BinarySearchTreeNode(null, null, item, key);
        }
        else if (key < current.key) {
            current.left = this.insertAux(current.left, key, item);
        }
        else if (key > current.key) {
            current.right = this.insertAux(current.right, key, item);
        }
        else {
            console.error('Key already exists in BST.');
        }
        return current;
    }

    setItem(key, item) {
        this.root = this.setItemAux(this.root, key, item);
    }

    setItemAux(current, key, item) {
        if (current === null) {
            current = new BinarySearchTreeNode(null, null, item, key);
        }
        else if (key < current.key) {
            current.left = this.insertAux(current.left, key, item);
        }
        else if (key > current.key) {
            current.right = this.insertAux(current.right, key, item);
        }
        // MAIN CHANGE
        else {
            current.item = item;
        }
        return current;
    }

}