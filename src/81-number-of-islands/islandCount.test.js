const {countIslands} = require('./islandCount2.js')

describe('the island count', () => {
  test('handles empty maps', () => {
    expect(countIslands([])).toBe(0)
  })
  test('correctly counts islands', () => {
    const map = [
        ['W', 'L', 'W', 'W', 'L', 'W'],
        ['L', 'L', 'W', 'L', 'L', 'L'],
        ['W', 'L', 'W', 'W', 'W', 'L'],
        ['W', 'W', 'W', 'W', 'W', 'W'],
        ['W', 'L', 'W', 'L', 'L', 'W'],
        ['W', 'W', 'W', 'L', 'W', 'W'],
    ]

    expect(countIslands(map)).toBe(4)
  })
})