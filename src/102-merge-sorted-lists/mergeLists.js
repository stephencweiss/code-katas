function mergeSortedList(l1, l2) {
    if (!l1 || l1.val === undefined || !l2 || l2.val === undefined) {
        if (l1 && l1.val) {
            return l1
        } else {
            return l2
        }
    }
    // capture head
    const fullList = []
    const head = l1.val <= l2.val ? l1 : l2
    let current = head;
    fullList.push(current)
    let l1Node = current === l1 ? l1.next : l1;
    let l2Node = current === l2 ? l2.next : l2
    // compare & update refs
    while(current && l1Node && l2Node){
        const next = l1Node.val < l2Node.val ? l1Node : l2Node
        current.next = next === l1Node ? l1Node : l2Node
        l1Node = next === l1Node ? l1Node.next : l1Node
        l2Node = next === l2Node ? l2Node.next : l2Node
        current = current.next
        fullList.push(current)
        console.log({current})
    }
    console.log(fullList)
    while(current && l1Node) {
        current.next = l1Node
        l1Node = l1Node.next
        current = current.next
        fullList.push(current)
    }
    while(current && l2Node) {
        current.next = l2Node
        l2Node = l2Node.next
        current = current.next
        fullList.push(current)
    }

    console.log(fullList)
    return head
}

module.exports = { mergeSortedList }
class ListNode {
    constructor(value, next) {
        this.val = value ? value : 0
        this.next = next ? next : null
    }
    add(node){
        this.next = node
    }
}

const node1 = new ListNode(1)
const node2 = new ListNode(2)
const node3 = new ListNode(4)
const node4 = new ListNode(1)
const node5 = new ListNode(3)
const node6 = new ListNode(4)
node1.add(node2)
node2.add(node3)
node4.add(node5)
node5.add(node6)

mergeSortedList(node1, node4)