const {firstComeFirstServed} = require('./firstComeFirstServed')
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
})
