const {MaxStack} = require('./largestStack')

describe("largest stack", () => {
    test("default is null incrementing stack", () => {
        const maxStack = new MaxStack()
        expect(maxStack.getMax()).toBe(null)
    })
    test("handles incrementing stack", () => {
        const maxStack = new MaxStack()
        maxStack.push(1)
        maxStack.push(2)
        maxStack.push(3)
        expect(maxStack.getMax()).toBe(3)
    })
    test("handles decrementing stack", () => {
        const maxStack = new MaxStack()
        maxStack.push(3)
        maxStack.push(2)
        maxStack.push(1)
        expect(maxStack.getMax()).toBe(3)

    })

    test("handles repeats in stack", () => {
        const maxStack = new MaxStack()
        maxStack.push(3)
        maxStack.push(3)
        maxStack.push(1)
        maxStack.push(4)
        expect(maxStack.getMax()).toBe(4)
        maxStack.pop()
        expect(maxStack.getMax()).toBe(3)
        maxStack.pop()
        expect(maxStack.getMax()).toBe(3)
        maxStack.pop()
        expect(maxStack.getMax()).toBe(3)
        maxStack.pop()
        expect(maxStack.getMax()).toBe(null)
    })

})