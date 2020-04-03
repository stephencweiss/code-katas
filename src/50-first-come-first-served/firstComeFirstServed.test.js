const {firstComeFirstServed} = require('./firstComeFirstServed')
const {firstComeFirstServedRedux} = require('./firstComeFirstServedRedux')
describe('first come first served', () => {
    test('Serve in order', () => {
        const takeOutOrders = [1, 3, 5]
        const dineInOrders = [2, 4, 6]
        const servedOrders = [1, 2, 3, 4, 5, 6]
        expect(firstComeFirstServed(dineInOrders, takeOutOrders, servedOrders)).toBe(true)
    })
    test("not all orders served", () => {
        const takeOutOrders = [1, 3, 5]
        const dineInOrders = [2, 4, 6]
        const servedOrders = [1, 2, 3, 4, 5]
        expect(firstComeFirstServed(dineInOrders, takeOutOrders, servedOrders)).toBe(false)
    })
    test('served out of order', () => {
        const takeOutOrders = [1, 3, 5]
        const dineInOrders = [2, 4, 6]
        const servedOrders = [1, 2, 4, 6, 5, 3]
        expect(firstComeFirstServed(dineInOrders, takeOutOrders, servedOrders)).toBe(false)
    })
    test('assume order numbers represent expected order', () => {
        // this was _not_ a valid assumption, but it was embedded in the original implementation
        const takeOutOrders = [1, 3, 5]
        const dineInOrders = [2, 4, 6, 8, 10, 12, 16]
        const servedOrders = [1, 2, 4, 6, 8, 10, 3, 12, 16, 5]
        expect(firstComeFirstServed(dineInOrders, takeOutOrders, servedOrders)).toBe(false)
    })
})
describe('first come first served Redux', () => {
    test('Serve in order', () => {
        const takeOutOrders = [1, 3, 5]
        const dineInOrders = [2, 4, 6]
        const servedOrders = [1, 2, 3, 4, 5, 6]
        expect(firstComeFirstServedRedux(dineInOrders, takeOutOrders, servedOrders)).toBe(true)
    })
    test("not all orders served", () => {
        const takeOutOrders = [1, 3, 5]
        const dineInOrders = [2, 4, 6]
        const servedOrders = [1, 2, 3, 4, 5]
        expect(firstComeFirstServedRedux(dineInOrders, takeOutOrders, servedOrders)).toBe(false)
    })
    test('served out of order', () => {
        const takeOutOrders = [1, 3, 5]
        const dineInOrders = [2, 4, 6]
        const servedOrders = [1, 2, 4, 6, 5, 3]
        expect(firstComeFirstServedRedux(dineInOrders, takeOutOrders, servedOrders)).toBe(false)
    })
    test('very different amount of orders served', () => {
        // by eliminating the assumption that all orders have to be in absolute order, we can no view the streams as distinct
        // still requires that each order be unique globally -- otherwise run the risk of collision
        const takeOutOrders = [1, 3, 5]
        const dineInOrders = [2, 4, 6, 8, 10, 12, 16]
        const servedOrders = [1, 2, 4, 6, 8, 10, 3, 12, 16, 5]
        expect(firstComeFirstServedRedux(dineInOrders, takeOutOrders, servedOrders)).toBe(true)
    })
})
