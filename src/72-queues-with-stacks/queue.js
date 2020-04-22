class Queue {
    constructor() {
        this.intake = []
        this.outgoing = []
    }

    enqueue(item) {
        this.intake.push(item)
    }
    dequeue() {
        if (this.outgoing.length === 0) {
            while (this.intake.length) {
                this.outgoing.push(this.intake.pop())
            }
            if (this.outgoing.length === 0) {
                throw new Error('Cannot dequeue from an empty queue!')
            }
        }
        return this.outgoing.pop()
    }
}

module.exports = { Queue }
