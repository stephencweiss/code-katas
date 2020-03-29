const { getMaxProfit } = require('./getMaxProfit')
describe('Maximizing profit', () => {
    test("can't sell before buying", () => {
        const prices = [82, 3, 4, 10]
        expect(getMaxProfit(prices)).toBe(7)
    })
    test('down day', () => {
        const prices = [10, 9, 6, 2]
        expect(getMaxProfit(prices)).toBe(-1)
    })
})
