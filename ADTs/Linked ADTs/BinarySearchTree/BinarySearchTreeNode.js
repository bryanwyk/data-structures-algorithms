class BinarySearchTreeNode {
    constructor(left=null, right=null, item=null, key){
        this.left = left;
        this.right = right;
        this.item = item;
        this.key = key;
    }

    toString(){
        return '(' + this.key + ',' + this.item + ')';
    }
}

export default BinarySearchTreeNode;