// current implementation checks to see if we've seen this _value_ before and uses that as a proxy
// a better approach would be to stringify the node itself -- and if this fails, it's because there's a loop.
function containsCycle(node){
    const seenNodes = new Set()
    let currentNode = node
    while(currentNode.next){
        if(seenNodes.has(currentNode.value)){
            return true
        }
        seenNodes.add(currentNode.value)
        currentNode = currentNode.next;
    }
    return false;
}


class LinkedListNode {
    constructor(value){
        this.value = value;
        this.next = null
    }
}

function containsCycleAlt(node){
    try{
        JSON.stringify(node)
        return false
    } catch(e){
        console.log(e)
        return true
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

console.log(containsCycle(node1))
console.log(containsCycleAlt(node1))
node5.next = node3
console.log(containsCycle(node1))
console.log(containsCycleAlt(node1))