class BinaryTreeNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }

    insertLeft(value) {
        this.left = new BinaryTreeNode(value)
        return this.left
    }

    insertRight(value) {
        this.right = new BinaryTreeNode(value)
        return this.right
    }
}

function findSecondLargestInBST(node){
    // given a node
}

