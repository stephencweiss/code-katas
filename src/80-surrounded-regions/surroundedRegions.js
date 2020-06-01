/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 * The intuition here is that we're "infecting" Os that do not have access to the border.
 * We make a _first_ pass over the board - starting at the edges - to mark the Os with border access as Ps (Protected)
 * Then we make a second pass over the board infecting the remaining Os to Xs (they were infected) and reverting the
 * Ps to their original O state
 */
var solve = function (board) {
    if (!board.length) return board
    const rows = board.length
    const columns = board[0].length
    const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ] // top, bottom, left, right

    function searchForNeighbors(row, column) {
        if (board[row][column] !== 'O') return
        const queue = []
        queue.push(new Cell(row, column))

        while (queue.length) {
            const cell = queue.shift()
            board[cell.row][cell.column] = 'P'

            directions.forEach(([dX, dY]) => {
                const row = cell.row + dX
                const column = cell.column + dY
                if (
                    0 <= row &&
                    row < rows &&
                    0 <= column &&
                    column < columns &&
                    board[row][column] === 'O'
                ) {
                    board[row][column] = 'P'
                    queue.push(new Cell(row, column))
                }
            })

        }
    }
    // search first and last column
    for (let row = 0; row < rows; row += 1) {
        searchForNeighbors(row, 0)
        searchForNeighbors(row, columns - 1)
    }

    // search first and last row
    for (let column = 0; column < columns; column += 1) {
        searchForNeighbors(0, column)
        searchForNeighbors(rows - 1, column)
    }

    // infect vulnerable, return protected
    for (let row = 0; row < rows; row += 1) {
        for (let column = 0; column < columns; column += 1) {
            if (board[row][column] === 'P') {
                board[row][column] = 'O'
            } else if (board[row][column] === 'O') {
                board[row][column] = 'X'
            }
        }
    }

    return
}

class Cell {
    constructor(row, column) {
        this.row = row
        this.column = column
    }
}
