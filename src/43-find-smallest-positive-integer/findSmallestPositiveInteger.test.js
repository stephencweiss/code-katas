const { findSmallestPositiveInteger } = require('./findSmallestPositiveInteger')

test('expect to handle duplicates', () => {
    const arr = [1,1,2,3,4,5]
    expect(findSmallestPositiveInteger(arr)).toBe(6)
})
test('expect to handle negative numbers', () => {
    const arr = [-1,2,3,4,5]
    expect(findSmallestPositiveInteger(arr)).toBe(1)
})
test.only('expect to handle unsorted numbers, and double digit numbers', () => {
    const arr = [10,1,5,2,3,4,5]
    expect(findSmallestPositiveInteger(arr)).toBe(6)
})
