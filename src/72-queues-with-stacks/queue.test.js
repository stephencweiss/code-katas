const { Queue } = require('./queueStacks')
const {Queue: LLQueue} = require('./queueLinkedList')

describe('A queue built with stacks', () => {
    test('properly enqueues/dequeues', () => {
        const queue = new Queue()
        queue.enqueue(1)
        queue.enqueue(2)
        queue.enqueue(3)
        queue.dequeue()
        queue.enqueue(4)
        expect(queue.dequeue()).toBe(2)
    })
})
describe('A queue built with Linked Lists', () => {
    test('properly enqueues/dequeues', () => {
        const queue = new LLQueue()
        queue.enqueue(1)
        queue.enqueue(2)
        queue.enqueue(3)
        queue.dequeue()
        queue.enqueue(4)
        expect(queue.dequeue()).toBe(2)
    })
})
