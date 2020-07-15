/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
    this.matrix = matrix
}

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
    let sum = 0
    if (this.rows <= row2 || this.cols <= col2) throw new Error('out of bounds')
    for (let row = row1; row <= row2; row += 1) {
        for (let col = col1; col <= col2; col += 1) {
            sum += this.matrix[row][col]
        }
    }
    return sum
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
