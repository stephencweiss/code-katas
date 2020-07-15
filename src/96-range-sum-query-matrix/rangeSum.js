/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
    this.rows = matrix.length
    this.cols = matrix[0].length
    this.cache = []
    this.preCompute(matrix)
    console.log({ cache: this.cache })
}

/**
 * Generate a cache which is the cumulative sum emanating from the point 0,0
 * Each row begins with the sum of the total column, then the row itself is the accumulation of that row
 * This allows each row to be distinct and more easily create offsets
 */
NumMatrix.prototype.preCompute = function (matrix) {
    for (let row = 0; row < this.rows; row += 1) {
        this.cache[row] = []
        for (let col = 0; col < this.cols; col += 1) {
            let previousColumn = col == 0 ? 0 : this.cache[row][col - 1]
            let previousRow = row == 0 ? 0 : this.cache[row - 1][col]
            let offset = row > 0 && col > 0 ? this.cache[row - 1][col - 1] : 0
            let current = matrix[row][col]
            this.cache[row].push(
                current + previousColumn + previousRow - offset
            )
        }
    }
}

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
    let totalArea = this.cache[row2][col2]
    let leftArea = col1 > 0 ? this.cache[row2][col1 - 1] : 0
    let topArea = row1 > 0 ? this.cache[row1 - 1][col2] : 0
    let cornerArea = row1 > 0 && col1 > 0 ? this.cache[row1 - 1][col1 - 1] : 0
    return totalArea - leftArea - topArea + cornerArea
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
const matrix = [
    [3, 0, 1, 5, 2],
    [5, 6, 3, 2, 1],
    [1, 2, 0, 1, 5],
    [4, 1, 0, 1, 7],
    [1, 0, 3, 0, 5],
]
let Test = new NumMatrix(matrix)
console.log(`break`)
console.log(Test.sumRegion(2, 1, 4, 3)) // -> 8
console.log(Test.sumRegion(1, 1, 2, 2)) // -> 11
console.log(Test.sumRegion(1, 2, 2, 4)) // -> 12
