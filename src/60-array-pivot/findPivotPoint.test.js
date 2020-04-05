const { findPivotPoint } = require('./findPivotPoint')

describe('Find a Pivot Point in semi-sorted arrays', () => {
    test('pivot at midpoint', () => {
        const sample = ['q', 'r', 'a', 'b', 'c']
        expect(findPivotPoint(sample)).toBe(2)
    })
    test('pivot after midpoint', () => {
        const sample = ['l', 'm', 'n', 'o', 'p', 'q', 'r', 'a', 'b', 'c', 'd']
        expect(findPivotPoint(sample)).toBe(7)
    })
    test('pivot before midpoint', () => {
        const sample = ['q', 'r', 'a', 'b', 'c', 'd', 'e', 'f']
        expect(findPivotPoint(sample)).toBe(2)
    })
    test('return 0 on pre-sorted', () => {
        const sample = ['a', 'b', 'c', 'd', 'e', 'f']
        expect(findPivotPoint(sample)).toBe(0)
    })
})