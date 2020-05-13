const { kthToLastNode } = require('./kthToLastNode')
class LinkedListNode {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

function valuesToLinkedListNodes(arr){
    const nodes = arr.map((el) => new LinkedListNode(el))
    const withNext = nodes.map((node, i, nodes) => {
        if (i < nodes.length - 1) {
            node.next = nodes[i+1]
        }
        return node
    })
    return withNext
}

describe("kth to last node", () => {
    test('first to last node', () => {
        let nodes = valuesToLinkedListNodes([1, 2, 3, 4]);
        console.log({nodes})
        let actual = kthToLastNode(1, nodes[0]);
        let expected = nodes[3];
        expect(actual).toBe(expected)
    })
    test('second to last node', () => {
        let nodes = valuesToLinkedListNodes([1, 2, 3, 4]);
        let actual = kthToLastNode(2, nodes[0]);
        let expected = nodes[2];
        expect(actual).toBe(expected)
    })
    test('first node', () => {
        let nodes = valuesToLinkedListNodes([1, 2, 3, 4]);
        let actual = kthToLastNode(4, nodes[0]);
        let expected = nodes[0];
        expect(actual).toBe(expected)
    })
    test('k greater than linked list', () => {
        let nodes = valuesToLinkedListNodes([1, 2, 3, 4]);
        function aPathTooFar() {
            return kthToLastNode(5, nodes[0]);
        }
        expect(aPathTooFar).toThrowError('List is not long enough!')
    })
    test('0th node', () => {
        let nodes = valuesToLinkedListNodes([1, 2, 3, 4]);
        function aPathNotFarEnough() {
            return kthToLastNode(0, nodes[0]);
        }
        expect(aPathNotFarEnough).toThrowError('K needs to be a positive integer!')
    })
})



