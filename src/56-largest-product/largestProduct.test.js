const { largestProduct } = require('./largestProduct')

describe('largest product', () => {
    test('handles unsorted arrays', () => {
        const arr = [1, 4, 3, 2, 5]
        expect(largestProduct(arr)).toBe(60)
    })
    test('handles negative numbers', () => {
        const arr = [-1, -8, 4, 3]
        expect(largestProduct(arr)).toBe(32)
    })
    test('compares negative numbers products properly', () => {
        const arr = [-1, -8, 4, 3, 5]
        expect(largestProduct(arr)).toBe(60)
    })
})
