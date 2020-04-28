function linkedListReverser(head){
    let currentNode = head
    let nextNode
    let previousNode
    while(currentNode){
        nextNode = currentNode.next
        currentNode.next = previousNode;
        previousNode = currentNode;
        currentNode = nextNode
    }
    return previousNode
}


class LinkedListNode {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
const node1 = new LinkedListNode(1)
const node2 = new LinkedListNode(10)
const node3 = new LinkedListNode(3)
const node4 = new LinkedListNode(100)
const node5 = new LinkedListNode(14)
const node6 = new LinkedListNode(15)
const node7 = new LinkedListNode(16)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node5.next = node6
node6.next = node7

console.log(`original -->`)
printNodes(node1)
const newHead = linkedListReverser(node1)
console.log(`reversed -->`)
printNodes(newHead)

function printNodes(node){
    console.log(node.value)
    if(node.next){
        return printNodes(node.next)
    }
}
