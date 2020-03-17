const {findMaxPath} = require('./findMaxPath')
test('expect to find the largest path', () => {
    const board = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ]
    expect(findMaxPath(board )).toBe(9874)
})

test('expect to handle one row boards', () => {
    const board = [[0, 1, 4, 0, 0]]
    expect(findMaxPath(board)).toBe(1400)
})
test('expect to handle one cases where reversing yields a larger value', () => {
    const board = [[0, 1, 4, 5, 0]]
    expect(findMaxPath(board)).toBe(5410)
})