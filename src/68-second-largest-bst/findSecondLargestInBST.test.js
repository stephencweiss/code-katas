const { findSecondLargest } = require('./findSecondLargestInBST')

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

describe('Find second largest in Binary Search Tree', () => {
    test('largest has child', () => {
        const root = new BinaryTreeNode(8)
        const node2 = new BinaryTreeNode(4)
        const node3 = new BinaryTreeNode(12)
        const node4 = new BinaryTreeNode(2)
        const node5 = new BinaryTreeNode(6)
        const node6 = new BinaryTreeNode(10)
        const node7 = new BinaryTreeNode(14)
        const node8 = new BinaryTreeNode(13)
        root.left = node2
        root.right = node3
        node2.left = node4
        node2.right = node5
        node3.left = node6
        node3.right = node7
        node7.left = node8
        expect(findSecondLargest(root)).toBe(13)
    })
    test('largest has multiple descendants', () => {
        const root = new BinaryTreeNode(8)
        const node2 = new BinaryTreeNode(4)
        const node3 = new BinaryTreeNode(11)
        const node4 = new BinaryTreeNode(2)
        const node5 = new BinaryTreeNode(6)
        const node6 = new BinaryTreeNode(10)
        const node7 = new BinaryTreeNode(16)
        const node8 = new BinaryTreeNode(13)
        const node9 = new BinaryTreeNode(12)
        const node10 = new BinaryTreeNode(14)
        root.left = node2
        root.right = node3
        node2.left = node4
        node2.right = node5
        node3.left = node6
        node3.right = node7
        node7.left = node8
        node8.left = node9
        node8.right = node10
        // expect 14
        expect(findSecondLargest(root)).toBe(14)
    })
    test('balanced right subtree', () => {
        const root = new BinaryTreeNode(8)
        const node2 = new BinaryTreeNode(4)
        const node3 = new BinaryTreeNode(12)
        const node4 = new BinaryTreeNode(2)
        const node5 = new BinaryTreeNode(6)
        const node6 = new BinaryTreeNode(10)
        const node7 = new BinaryTreeNode(14)

        root.left = node2
        root.right = node3
        node2.left = node4
        node2.right = node5
        node3.left = node6
        node3.right = node7

        expect(findSecondLargest(root)).toBe(12)
    })
    test('no children', () => {
        const root = new BinaryTreeNode(8)
        expect(findSecondLargest(root)).toBe(null)
    })
    test('one child only', () => {
        const rootOne = new BinaryTreeNode(8)
        const node2 = new BinaryTreeNode(4)

        const rootTwo = new BinaryTreeNode(8)
        const node3 = new BinaryTreeNode(12)

        rootOne.left = node2
        expect(findSecondLargest(rootOne)).toBe(4)

        rootTwo.right = node3
        expect(findSecondLargest(rootTwo)).toBe(8)
    })
})
