const {findLHS } = require('./lhs')

describe('Finding the Longest Harmonious Subsequence', () => {
    test('basic', () => {
        expect(findLHS([1])).toBe(0)
        expect(findLHS([1,1,1,1])).toBe(0)
    })
    test('narrow', () => {
        expect(findLHS([1,2,1,2])).toBe(4)
    })
    test('wide', () => {
        expect(findLHS([1,3,2,2,5,2,3])).toBe(5)
    })
})