class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor() {
        this.head = null
        this.tail = null
    }
    enqueue(item) {
        const node = new Node(item)
        if (!this.head) {
            this.head = node
        }
        if (this.tail) {
            this.tail.next = node
        }
        this.tail = node
    }
    dequeue() {
        if (!this.head) {
            throw new Error('Cannot dequeue - nothing in queue!')
        }
        const formerHead = this.head
        this.head = this.head.next
        return formerHead.value
    }
}

module.exports = {Queue}