class FindElements {
    constructor(root) {
        this.elements = new Set()
        this.decontaminateTree(root, 0)
    }

    decontaminateTree(node, val) {
        this.elements.add(val)
        node.left && this.decontaminateTree(node.left, val * 2 + 1)
        node.right && this.decontaminateTree(node.right, val * 2 + 2)
    }

    find(val) {
        return this.elements.has(val)
    }
}
