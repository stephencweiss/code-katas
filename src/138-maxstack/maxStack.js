// Problem Description
// A stack is a data structure with four main operations (for our case, let’s assume it’s a stack of ints):

// x push(i):    Add i to the top of the stack
// x pop():      Remove and return the value on the top of the stack, raising an exception
//             if the stack is empty
// x peek():     Return, but do not remove, the value on the top of the stack, raising an
//             exception if the stack is empty
// x is_empty(): Return a boolean that is true if there is nothing on the stack, and false
//             otherwise
// x max(): Returns the maximum value in the stack (but does not remove), O(1); raising an
//             exception if the stack is empty
// Given this definition, implement a new class called MaxStack. It should have all the same functionality as a regular stack, as well as a function that returns (but does not remove) the maximum value on the stack in O(1) time. All other functions must continue to return in O(1) time.

class MaxStack {
    stack = [] // [1,5,4,3,8] // [1,5,4,3]
    maximumValue = [] // [1,5,8] // [1,5]

    constructor() {}

    push(i) {
        // add guard for BigInt in javascript (i.e., constraint the inputs to only safe integers)
        this.stack.push(i)
        console.log({ curMax: this.maximumValue[this.maximumValue.length - 1] })
        if (
            i >= this.maximumValue[this.maximumValue.length - 1] ||
            this.maximumValue.length === 0
        ) {
            this.maximumValue.push(i)
        }
    }

    pop() {
        if (this.isEmpty()) throw new Error('Stack is empty')
        const popped = this.stack.pop()
        if (this.maximumValue[this.maximumValue.length - 1] === popped) {
            this.maximumValue.pop()
            // this.maximumValue = this.stack.reduce((max, cur) => Math.max(max, cur))
        }

        return popped
    }
    peek() {
        if (this.isEmpty()) throw new Error('Stack is empty')
        return this.stack[this.stack.length - 1]
    }
    isEmpty() {
        return this.stack.length === 0
    }
    max() {
        if (this.isEmpty()) throw new Error('Stack is Empty')
        return this.maximumValue[this.maximumValue.length - 1]
    }
}

const stack = new MaxStack()
// stack.max() // -Infinity , error
stack.push(1)
stack.push(5)
stack.push(8)
stack.push(4)
stack.push(3)
stack.push(8)
stack.push(8)

console.log({ stack })
const max1 = stack.max()

stack.pop()
const max2 = stack.max() // 5
stack.pop()

const max3 = stack.max()
console.log({ stack, max1, max2, max3 })
stack.pop()
