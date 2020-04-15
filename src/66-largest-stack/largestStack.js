class Stack {
    constructor() {
        // Initialize an empty stack
        this.items = []
    }

    // Push a new item onto the stack
    push(item) {
        this.items.push(item)
    }

    // Remove and return the last item
    pop() {
        // If the stack is empty, return null
        // (It would also be reasonable to throw an exception)
        if (!this.items.length) {
            return null
        }
        return this.items.pop()
    }

    // Returns the last item without removing it
    peek() {
        if (!this.items.length) {
            return null
        }
        return this.items[this.items.length - 1]
    }
}

class MaxStack {
    constructor() {
        this.stack = new Stack()
        this.maxStack = new Stack()
    }

    push(item) {
        this.stack.push(item)
        if (this.maxStack.peek() === null || this.maxStack.peek() <= item) {
            this.maxStack.push(item)
        }
    }

    pop() {
        const item = this.stack.pop()
        if (this.maxStack.peek() === item) {
            this.maxStack.pop()
        }
        return item
    }
    getMax() {
        return this.maxStack.peek()
    }
}

module.exports = {MaxStack}

const maxStack = new MaxStack()
maxStack.push(1)
maxStack.push(2)
maxStack.push(3)
maxStack.getMax()