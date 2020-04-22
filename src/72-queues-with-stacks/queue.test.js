const { Queue } = require('./queue')

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
