const gameOfLife = require('./life')

describe('game of life', () => {
    test('standard game', () => {
        const board = [
            [0, 1, 0],
            [0, 0, 1],
            [1, 1, 1],
            [0, 0, 0],
        ]
        const finalState = [
            [0, 0, 0],
            [1, 0, 1],
            [0, 1, 1],
            [0, 1, 0],
        ]
        expect(gameOfLife(board)).toBe(finalState)
    })
})
