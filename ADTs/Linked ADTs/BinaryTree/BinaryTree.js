class BinaryTree{
    constructor(){
        this.root = null;
    }
    
    isEmpty(){
        return this.root === null;
    }

    // return number of nodes in the tree
    get length(){
        return this.lengthAux(this.root);
    }

    lengthAux(current){
        if (current === null) {
            return 0;
        }
        return 1+this.lengthAux(current.left)+this.lengthAux(current.right)
    }

    // PreOrder. For any function, replace console.log().
    printPreOrder(){
        preOrderAux(this.root);
    }

    preOrderAux(current){
        if (current !== null) {
            console.log(current);
            this.preOrderAux(current.left);
            this.preOrderAux(current.right);
        }
    }

    // InOrder. For any function, replace console.log().
    printInOrder(){
        inOrderAux(this.root);
    }

    inOrderAux(current){
        if (current !== null) {
            this.inOrderAux(current.left);
            console.log(current);
            this.inOrderAux(current.right);
        }
    }

    // PostOrder. For any function, replace console.log().
    printPostOrder(){
        postOrderAux(this.root);
    }

    postOrderAux(current){
        if (current !== null) {
            this.postOrderAux(current.left);
            this.postOrderAux(current.right);
            console.log(current);
        }
    }
}